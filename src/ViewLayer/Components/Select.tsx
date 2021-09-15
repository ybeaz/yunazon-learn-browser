import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import { IHandleEventsProps } from '../../Interfaces/IHandleEventsProps'
import { ISelectOption } from '../../Interfaces/ISelectOption'
import { handleEvents } from '../../DataLayer/index.handleEvents'

export { ISelectOption } from '../../Interfaces/ISelectOption'
interface ISelectArgs {
  multiple?: boolean
  options: ISelectOption[]
  size: number
  sizeOnBlur: number
}

interface IGetOptionsNext {
  (options: ISelectOption[], arrSelected: string[]): ISelectOption[]
}

export const Select: React.FunctionComponent<ISelectArgs> = (
  props: ISelectArgs
): JSX.Element => {
  const { size, sizeOnBlur, options, multiple } = props

  const [optionsState, setOptionsState] = useState(options)
  const [optionsState2, setOptionsState2] = useState(options)
  const [onBlurState, setOnBlurState] = useState(false)
  const [sizeState, setSizeState] = useState(sizeOnBlur)

  useEffect(() => {
    setOptionsState(options)
    setOptionsState2(options)
    setOnBlurState(false)
    setSizeState(sizeOnBlur)
  }, [options])

  const getOptions = (optionsIn: ISelectOption[]): React.ReactElement[] => {
    return optionsIn.map((option: ISelectOption) => {
      const { text, value, defaultSelected, selected } = option
      const nanoID = nanoid()
      const optionProps = {
        key: nanoID,
        className: '_option',
        value,
        defaultSelected,
        selected,
      }
      return <option {...optionProps}>{text}</option>
    })
  }

  const getOptionsNext: IGetOptionsNext = (options2, arrSelected) => {
    let output = options2.map((option: ISelectOption, i: number) => {
      const { value, selected } = option

      let selectedNext = false
      if (multiple) {
        if (selected) {
          selectedNext = !arrSelected.find(item => item === value)
        } else {
          selectedNext = !!arrSelected.find(item => item === value)
        }
      } else {
        selectedNext = !!arrSelected.find(item => item === value)
      }

      return {
        ...option,
        selected: selectedNext,
      }
    })

    const optionsSelected = output.filter(item => item.selected === true)

    // Case if nothing is selected
    // if (optionsSelected.length === 1 && arrSelected.length === 0) {
    //   output = options.map((item, i) =>
    //     i === 0 ? { ...item, selected: true } : item
    //   )
    // }

    console.info('Select [79]', { optionsSelected, output, arrSelected })

    // Case if user tryes to select "0" option
    if (optionsSelected.length > 1) {
      output = output.map((item, i) =>
        i === 0 ? { ...item, selected: false } : item
      )
    }

    return output
  }

  const SELECT_ON_MOUSE_DOWN = (event: any): void => {
    options.length > size && setSizeState(size)

    const optionsStateSelected = optionsState.filter(
      item => item.selected === true
    )

    if (
      !onBlurState &&
      optionsStateSelected.length === 1 &&
      event.target.value === optionsStateSelected[0].value
    ) {
      setOptionsState(options)
    } else {
      onBlurState && setOptionsState(optionsState2)
      setOnBlurState(false)
    }
  }

  const SELECT_ON_CHANGE = (event: any): void => {
    setSizeState(size)

    const arrSelected = event.target.selectedOptions
      ? Array.from(event.target.selectedOptions, (option: any) => option.value)
      : [event.target.value]

    const optionsStateNext = getOptionsNext(optionsState, arrSelected)

    setOptionsState(optionsStateNext)

    const dataSelected = optionsStateNext
      .filter((item, i) => i !== 0 && item.selected === true)
      .map(item => item.value)

    handleEvents(event, {
      typeEvent: 'SELECT_ON_CHANGE',
      data: dataSelected,
    })
  }

  const SELECT_ON_MOUSE_ENTER = (): void => {
    options.length > size && setSizeState(size)

    if (onBlurState) {
      onBlurState && setOptionsState(optionsState2)
      setOnBlurState(false)
    }
  }

  const SELECT_ON_MOUSE_LEAVE = (): void => {
    let optionsNext = optionsState.filter(item => item.selected === true)
    if (optionsState.filter(item => item.selected === true).length === 0) {
      optionsNext = options.filter((item, i) => i === 0)
    }

    const sizeSelected = optionsNext.length ? optionsNext.length : 1

    setOnBlurState(true)
    setSizeState(sizeSelected)
    setOptionsState2(optionsState)
    setOptionsState(optionsNext)
  }

  const handleComponentEvents = (
    event: any,
    propsEvent: IHandleEventsProps
  ): void => {
    const { typeEvent, data } = propsEvent

    const output = {
      SELECT_ON_MOUSE_DOWN,
      SELECT_ON_CHANGE,
      SELECT_ON_MOUSE_ENTER,
      SELECT_ON_MOUSE_LEAVE,
    }

    output[typeEvent]
      ? output[typeEvent](event)
      : console.log('Select handleComponentEvents [error]', 'strange type', {
          typeEvent,
          data,
        })
  }

  return (
    <div className='Select'>
      <select
        className='__selectTag _scrollbar'
        name='select_component'
        size={sizeState}
        multiple={multiple}
        onMouseDown={(event: any) =>
          handleComponentEvents(event, { typeEvent: 'SELECT_ON_MOUSE_DOWN' })
        }
        onChange={(event: any) =>
          handleComponentEvents(event, { typeEvent: 'SELECT_ON_CHANGE' })
        }
        onMouseEnter={(event: any) =>
          handleComponentEvents(event, { typeEvent: 'SELECT_ON_MOUSE_ENTER' })
        }
        onMouseLeave={(event: any) =>
          handleComponentEvents(event, {
            typeEvent: 'SELECT_ON_MOUSE_LEAVE',
          })
        }
        onBlur={(event: any) => () => {}}
      >
        {getOptions(optionsState)}
      </select>
    </div>
  )
}
