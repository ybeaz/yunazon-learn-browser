import React, { useRef } from 'react'

import { getClasses } from '../../../Shared/getClasses'
import { FormsType, SearchFormSepType } from '../../../Interfaces/RootStoreType'
import { withStoreStateSelectedYrl } from '../Hooks/withStoreStateSelectedYrl'
import { IconYrl } from '../'

import {
  InputYrlComponentPropsType,
  InputYrlPropsType,
  InputYrlPropsOutType,
  InputYrlComponentType,
  InputYrlType,
} from './InputYrlTypes'

/**
 * @description Component to render InputYrl
 * @propsOut 
    inputYrlProps: {
      classAdded: 'Input_passwordAuth',
      type: 'text',
      placeholder: 'myPlaceholder',
      typeEvent: 'ONCHANGE_USER_PASSWORD_AUTH_2',
      storeFormGroup: 'user',
      storeFormProp: 'userPasswordAuth2',
    },
 * @import import { InputYrl, InputYrlPropsType, InputYrlType } 
             from '../ComponentsLibrary/'
 */
const InputYrlComponent: InputYrlComponentType = (props: InputYrlComponentPropsType) => {
  const {
    tagName = 'input',
    classAdded,
    key,
    type,
    placeholder,
    typeEvent,
    typeEventOnEnter,
    dataEventOnEnter,
    storeFormGroup,
    storeFormProp,
    accept,
    storeStateSlice: { forms },
    handleEvents,
  } = props

  let value: string | number | string[] = ''

  if (storeFormGroup && storeFormProp && forms[storeFormGroup]) {
    // @ts-expect-error
    value = forms[storeFormGroup][storeFormProp]
  } else if (storeFormProp) {
    const formsKey = storeFormProp as keyof FormsType
    value = forms[formsKey] as any
  }

  const action = { typeEvent, data: { storeFormGroup, storeFormProp } }
  const actionOnEnter = { typeEvent: typeEventOnEnter, data: dataEventOnEnter }

  const iconReactProps = {
    icon: 'MdClose',
    icon2: 'null',
    classAdded: 'IconYrl_Input',
  }

  const inputRef = useRef(null)
  const textareaRef = useRef(null)

  // TODO Make click programmaticaly from another element to change default label
  // https://stackoverflow.com/questions/32433594/how-to-trigger-input-file-event-reactjs-by-another-dom
  // const handleClick = () => {
  //   inputFileRef.current.type = type
  //   inputFileRef.current.onInput()
  // }

  const propsOut: InputYrlPropsOutType = {}

  return (
    <div className={getClasses(`InputYrl`, classAdded)}>
      <div className='__form'>
        {tagName === 'input' && (
          <input
            className={'__input _hidden'}
            key={key}
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            value={value}
            accept={accept}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleEvents(event, action)
            }}
            onKeyDown={(event: any) => {
              if (event.key === 'Enter') {
                handleEvents(event, actionOnEnter)
              }
            }}
          />
        )}
        {tagName === 'textarea' && (
          <textarea
            className={'__input'}
            key={key}
            ref={textareaRef}
            placeholder={placeholder}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleEvents(event, action)
            }
            defaultValue={value}
          />
        )}
      </div>
      <span
        className='_iconClose'
        onClick={(_event: React.MouseEvent<HTMLSpanElement>) =>
          handleEvents({ target: { value: '' } }, action)
        }
      >
        <IconYrl {...iconReactProps} />
      </span>
    </div>
  )
}

const storeStateSliceProps: string[] = ['forms']
export const InputYrl: InputYrlType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(InputYrlComponent)
)

export type { InputYrlPropsType, InputYrlPropsOutType, InputYrlComponentType, InputYrlType }
