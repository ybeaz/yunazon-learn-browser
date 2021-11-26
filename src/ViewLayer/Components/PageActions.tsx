import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../Components/Button'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IRootStore } from '../../Interfaces/IRootStore'

interface PageActionsArgs {
  courseCapture?: string
  documentID?: string
  courseID?: string
  contentID?: string
}

export const PageActions: React.FunctionComponent<PageActionsArgs> = (
  props: PageActionsArgs
): ReactElement => {
  const { courseCapture, documentID, courseID, contentID } = props

  const { language } = useSelector((store2: IRootStore) => store2)

  const buttonPrintProps = {
    icon: 'MdPrint',
    classAdded: 'Button_UseCertificate',
    action: {
      typeEvent: 'PRINT_DOCUMENT',
      data: { courseCapture, documentID, courseID, contentID },
    },
    tooltipText: DICTIONARY['sendToPrint'][language],
    tooltipPosition: 'bottom',
  }

  const buttonEmailProps = {
    icon: 'MdMailOutline',
    classAdded: 'Button_UseCertificate',
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
  }

  const buttonCopyLinkProps = {
    icon: 'BsLink45Deg',
    classAdded: 'Button_UseCertificate',
    action: {
      typeEvent: 'COPY_URL_TO_CLIPBOARD',
      data: { courseCapture, documentID, courseID, contentID },
    },
    tooltipText: DICTIONARY['copyLinkToClipboard'][language],
    tooltipPosition: 'bottom',
  }

  return (
    <div className='PageActions'>
      <div className='_buttons'>
        <Button {...buttonPrintProps} />
        <Button {...buttonEmailProps} />
        <Button {...buttonCopyLinkProps} />
      </div>
    </div>
  )
}
