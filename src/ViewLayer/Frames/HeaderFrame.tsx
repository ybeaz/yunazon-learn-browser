import React from 'react'
import { useSelector } from 'react-redux'

import { ModalFrames } from '../Frames/ModalFrames'
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

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]
  const buttonAddCourseProps = {
    icon: 'MdQueue',
    classAdded: 'Button_AddCourse',
    tooltipText: createCourseQuiz,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
  }

  const buttonAuthUser = {
    icon: 'MdPerson',
    classAdded: 'Button_personalCabinet',
    tooltipText: DICTIONARY.PersonalСabinet[language],
    tooltipPosition: 'bottom',
    action: {
      typeEvent: 'SET_MODAL_FRAMES',
      data: [{ childName: 'AuthUser', isActive: true, childProps: {} }],
    },
  }

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_PresentAndSubscribe'
      : ''

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
        <div className='_itemButtonAuthUser'>
          <Button {...buttonAuthUser} />
        </div>
        <div className='_itemLanguageSelect'>
          <LanguageSelect />
        </div>
      </div>
      <ModalFrames />
    </div>
  )
}
