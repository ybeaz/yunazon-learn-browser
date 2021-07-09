import React from 'react'
import { useSelector } from 'react-redux'

import { EmalInputs } from '../Components/EmalInputs'
import { ModalFrame } from '../Frames/ModalFrame'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Button } from '../Components/Button'
import { LanguageSelect } from '../Components/LanguageSelect'
import { LogoGroup } from '../Components/LogoGroup'
interface IHeaderFrameInput {
  contentComponentName: string
  children: React.ReactChildren
}

export const HeaderFrame: React.FunctionComponent<any> = (
  props: IHeaderFrameInput
): JSX.Element => {
  const { contentComponentName } = props

  const { language } = useSelector((store: IRootStore) => store)

  const buttonMdPersonProps = {
    icon: 'MdPerson',
    classAdded: 'Button_MdPerson',
    // action: { typeEvent: ''}
  }

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]
  const buttonAddCourseProps = {
    icon: 'MdQueue',
    classAdded: 'Button_AddCourse',
    tooltipText: createCourseQuiz,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
  }

  const buttonPersonalCabinet = {
    icon: 'MdPerson',
    classAdded: 'Button_personalCabinet',
    tooltipText: DICTIONARY.PersonalСabinet[language],
    tooltipPosition: 'bottom',
    action: { typeEvent: 'TOGGLE_MODAL_FRAME', data: true },
  }

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_PresentAndSubscribe'
      : ''

  const emailInputsProps = { documentID: 1234567 }

  return (
    <div className={`HeaderFrame ${classAddHeaderFrame}`}>
      <div className='__left'>
        {props.children[0]}
        <LogoGroup />
      </div>
      <div className='__main'>{props.children[1]}</div>
      <div className='__right'>
        <div className='_itemButtonAddCourse'>
          <Button {...buttonAddCourseProps} />
        </div>
        <div className='_itemButtonPersonalCabinet'>
          <Button {...buttonPersonalCabinet} />
        </div>
        <div className='_itemLanguageSelect'>
          <LanguageSelect />
        </div>
      </div>
      <ModalFrame childName={'EmalInputs'}>
        <EmalInputs {...emailInputsProps} />
      </ModalFrame>
    </div>
  )
}
