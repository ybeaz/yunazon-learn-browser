import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import { handleEvents } from '../../DataLayer/index.handleEvents'

interface PropsEvent {
  data?: any
  typeEvent: string
}

interface Option {
  defaultSelected?: boolean
  selected: boolean
  text?: string
  value?: string
}

interface SelectArgs {
  multiple?: boolean
  options: Option[]
  size: number
  sizeOnBlur: number
}

export const Select: React.FunctionComponent<SelectArgs> = (
  props: SelectArgs
): JSX.Element => {
  const { size, sizeOnBlur, options, multiple } = props

  const [optionsState, setOptionsState] = useState(options)
  const [optionsState2, setOptionsState2] = useState(options)
  const [onBlurState, setOnBlurState] = useState(false)
  const [sizeState, setSizeState] = useState(sizeOnBlur)

  const getOptions = (optionsIn: Option[]): React.ReactElement[] => {
    return optionsIn.map((option: Option) => {
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

  interface GetOptionsNext {
    (options: Option[], arrSelected: string[]): Option[]
  }

  const getOptionsNext: GetOptionsNext = (options2, arrSelected) => {
    let output = options2.map((option: Option) => {
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

    const optionsStateSelected = optionsState.filter(
      item => item.selected === true
    )
    if (optionsStateSelected.length === 1 && arrSelected.length === 0) {
      output = options.map((item, i) =>
        i === 0 ? { ...item, selected: true } : item
      )
    }

    return output
  }

  const handleComponentEvents = (event: any, propsEvent: PropsEvent): void => {
    const { typeEvent, data } = propsEvent

    const output = {
      SELECT_ON_MOUSE_DOWN: () => {
        options.length > size && setSizeState(size)

        const optionsStateSelected = optionsState.filter(
          item => item.selected === true
        )

        if (
          !onBlurState &&
          optionsStateSelected.length === 1 &&
          event.target.value === optionsStateSelected[0].value
        ) {
          const optionsStateNext = options.map((item, i) =>
            i === 0 ? { ...item, selected: true } : item
          )
          setOptionsState(optionsStateNext)
        } else {
          onBlurState && setOptionsState(optionsState2)
          setOnBlurState(false)
        }
      },
      SELECT_ON_CHANGE: () => {
        setSizeState(size)

        const arrSelected = event.target.selectedOptions
          ? Array.from(
              event.target.selectedOptions,
              (option: any) => option.value
            )
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
      },
      SELECT_ON_BLUR: () => {
        const optionsSelected = optionsState.filter(
          item => item.selected === true
        )
        const sizeSelected = optionsSelected.length ? optionsSelected.length : 1

        setOnBlurState(true)
        setSizeState(sizeSelected)
        setOptionsState2(optionsState)
        setOptionsState(optionsSelected)
      },
    }

    output[typeEvent]
      ? output[typeEvent]()
      : console.log('Select handleComponentEvents [error]', 'strange type', {
          typeEvent,
          data,
        })
  }

  return (
    <div className='Select'>
      <select
        className='__selectTag'
        name='select_component'
        size={sizeState}
        multiple={multiple}
        onMouseDown={(event: any) =>
          handleComponentEvents(event, { typeEvent: 'SELECT_ON_MOUSE_DOWN' })
        }
        onChange={(event: any) =>
          handleComponentEvents(event, { typeEvent: 'SELECT_ON_CHANGE' })
        }
        onBlur={(event: any) =>
          handleComponentEvents(event, { typeEvent: 'SELECT_ON_BLUR' })
        }
      >
        {getOptions(optionsState)}
      </select>
    </div>
  )
}
