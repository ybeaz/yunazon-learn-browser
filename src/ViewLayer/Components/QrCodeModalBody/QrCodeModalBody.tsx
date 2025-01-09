import React from 'react'

import { DICTIONARY } from 'yourails_common'
import { SCREENS_DICT } from 'yourails_common'
import { withStoreStateSelectedYrl, InputGroupYrl, withPropsYrl, ButtonYrl } from 'yourails_common'
import { getMediaSizeCrossBrowser } from 'yourails_common'
import { QRCodeSVG } from 'qrcode.react'
import { getClasses } from 'yourails_common'
import { SERVERS_MAIN } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import {
  QrCodeModalBodyComponentPropsType,
  QrCodeModalBodyPropsType,
  QrCodeModalBodyPropsOutType,
  QrCodeModalBodyComponentType,
  QrCodeModalBodyType,
} from './QrCodeModalBodyTypes'

/**
 * @description Component to render QrCodeModalBody
 * @links To qrcode.react lib: https://www.npmjs.com/package/qrcode.react?activeTab=readme
 * @import import { QrCodeModalBody, QrCodeModalBodyPropsType, QrCodeModalBodyPropsOutType, QrCodeModalBodyType } 
             from '../Components/QrCodeModalBody/QrCodeModalBody'
 */
const QrCodeModalBodyComponent: QrCodeModalBodyComponentType = (
  props: QrCodeModalBodyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language, screenActive = 'QrCodeModal', isSendBccInputVisible },
    handleEvents,
  } = props

  const linkToUrl = DICTIONARY.Link_to_URL[language]

  const { pathname, search } = location
  const url = `${SERVERS_MAIN.remote}${pathname}${search}`

  const { width, height } = getMediaSizeCrossBrowser(global)
  const qrCodeSize = Math.min(width, height) / 2

  const propsOut: QrCodeModalBodyPropsOutType = {
    qRCodeSvgProps: { value: url, size: qrCodeSize },
    inputSendBccProps: {
      inputProps: {
        classAdded: 'Input_search',
        type: 'email',
        placeholder: SCREENS_DICT[screenActive]?.placeholder,
        handleEvents,
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_SEND_BCC_CONFIRM',
        storeFormProp: SCREENS_DICT[screenActive]?.storeFormProp,
      },
      buttonSubmitProps: {
        icon: 'MdOutlineEmail',
        classAdded: 'Button_MdSearch',
        handleEvents,
        action: { typeEvent: 'CLICK_ON_SEND_BCC_CONFIRM' },
        isDisplaying: true,
      },
    },
    buttonIsSendBccVisibleProps: {
      icon: 'MdOutlineEmail',
      classAdded: 'Button_MdSearch',
      handleEvents,
      action: { typeEvent: 'TOGGLE_IS_SEND_BCC_INPUT_VISIBLE' },
      isDisplaying: !isSendBccInputVisible,
    },
  }

  return (
    <div className={getClasses('QrCodeModalBody', classAdded)}>
      <h2>{linkToUrl}</h2>
      <div className='_qRCodeSVG'>
        <QRCodeSVG {...propsOut.qRCodeSvgProps} />
      </div>

      {isSendBccInputVisible && (
        <div className='_inputSendBcc'>
          <InputGroupYrl {...propsOut.inputSendBccProps} />
        </div>
      )}

      <div className='_buttonIsSendBccVisible'>
        <ButtonYrl {...propsOut.buttonIsSendBccVisibleProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'isSendBccInputVisible']
const QrCodeModalBody: QrCodeModalBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(QrCodeModalBodyComponent))
)

export type { QrCodeModalBodyPropsType, QrCodeModalBodyType }
export { QrCodeModalBody }
