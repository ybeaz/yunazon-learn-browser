import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import { handleEvents } from '../Hooks/handleEvents'

interface PropsEvent {
  typeEvent: string
  data?: any
}

interface Option {
  text?: string
  value?: string
  defaultSelected: boolean
  selected: boolean
}

interface SelectArgs {
  size: number
  options: Option[]
}

export const Select: React.FunctionComponent<SelectArgs> = (
  props: SelectArgs
): JSX.Element => {
  const { size, options } = props

  const [optionsState, setOptionsState] = useState(options)
  const [sizeState, setSizeState] = useState(0)

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

  const handleComponentEvents = (event: any, propsEvent: PropsEvent): void => {
    const { typeEvent, data } = propsEvent

    const output = {
      SELECT_ON_MOUSE_DOWN: () => options.length > size && setSizeState(size),
      SELECT_ON_CHANGE: () => {
        setSizeState(0)

        const optionsStateNext = optionsState.map(option => {
          const { value } = option
          const selectedNext = value === event.target.value ? true : false
          return { ...option, selected: selectedNext }
        })

        setOptionsState(optionsStateNext)
        handleEvents(event, { typeEvent: 'SELECT_ON_CHANGE' })
      },
      SELECT_ON_BLUR: () => setSizeState(0),
    }

    output[typeEvent]
      ? output[typeEvent]()
      : console.info('Select handleComponentEvents [error]', 'strange type', {
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
