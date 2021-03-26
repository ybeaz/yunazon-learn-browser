import React, { useState, useEffect, useRef, ReactElement } from 'react'

import { CheckRadioGroup } from './CheckRadioGroup'
import { Button } from './Button'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'

export const QuestionsColumn: Function = (): JSX.Element => {
  const checkBoxesProps = {
    capture: 'My first question',
    checkInputsIn: [
      { label: 'One', checked: true },
      { label: 'Two', checked: false },
      { label: 'Three', checked: false },
      { label: 'Four', checked: false },
    ],
    typeInput: 'CheckBoxes',
    multi: true,
  }

  const radioButtonsProps = {
    capture: 'My second question',
    checkInputsIn: [
      { label: 'One', checked: true },
      { label: 'Two', checked: false },
      { label: 'Three', checked: false },
      { label: 'Four', checked: false },
    ],
    typeInput: 'RadioButtons',
    multi: false,
  }

  const buttonContinueProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward',
    // handleEvents: () => { },
    // action: {},
  }

  const buttonPrintCertProps = {
    icon: 'MdPrint',
    classAdded: 'Button_MdForward',
    handleEvents: getPrintScreenAsPdf,
    action: { screenType: 'Certificate', userName: 'Vasia Pupkin' },
  }

  return (
    <div className='QuestionsColumn'>
      <div className='QuestionsColumn__questions'>
        <CheckRadioGroup {...checkBoxesProps} />
        <CheckRadioGroup {...radioButtonsProps} />
      </div>
      <div className='QuestionsColumn__ok'>
        <Button {...buttonContinueProps} />
        <div className='QuestionsColumn__print'>
          <Button {...buttonPrintCertProps} />
        </div>
      </div>
    </div>
  )
}
