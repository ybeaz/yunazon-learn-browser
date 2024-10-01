import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { withPropsYrl, ButtonYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { DICTIONARY } from '../../../Constants/dictionary.const'

import {
  PageActionsGroupComponentPropsType,
  PageActionsGroupPropsOutType,
  PageActionsGroupComponentType,
  PageActionsGroupType,
} from './PageActionsGroupTypes'

export const PageActionsGroupComponent: PageActionsGroupComponentType = (
  props: PageActionsGroupComponentPropsType
) => {
  const {
    moduleCapture,
    documentID,
    moduleID,
    contentID,
    tagID,
    storeStateSlice: { language },
    handleEvents,
  } = props

  const propsOut: PageActionsGroupPropsOutType = {
    buttonPrintProps: {
      icon: 'MdPrint',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'PRINT_DOCUMENT',
        data: { moduleCapture, documentID, moduleID, contentID, tagID },
      },
      tooltipText: DICTIONARY['sendToPrint'][language],
      tooltipPosition: 'bottom',
    },

    buttonEmailProps: {
      icon: 'MdMailOutline',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'EmalInputs',
            isActive: true,
            childProps: { documentID },
          },
        ],
      },
      tooltipText: DICTIONARY['sendToEmail'][language],
      tooltipPosition: 'bottom',
    },

    buttonCopyLinkProps: {
      icon: 'BsLink45Deg',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'COPY_URL_TO_CLIPBOARD',
        data: { moduleCapture, documentID, moduleID, contentID },
      },
      tooltipText: DICTIONARY['copyLinkToClipboard'][language],
      tooltipPosition: 'bottom',
    },
  }

  return (
    <div className='PageActions'>
      <div className='_buttons'>
        <ButtonYrl {...propsOut.buttonPrintProps} />
        <ButtonYrl {...propsOut.buttonEmailProps} />
        <ButtonYrl {...propsOut.buttonCopyLinkProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']

export const PageActionsGroup: PageActionsGroupType = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(PageActionsGroupComponent)))
