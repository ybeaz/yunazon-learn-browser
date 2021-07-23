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

  const { user, language } = useSelector((store: IRootStore) => store)

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]
  const buttonAddCourseProps = {
    icon: 'MdQueue',
    classAdded: 'Button_AddCourse',
    tooltipText: createCourseQuiz,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
  }

  const buttonAuthUser = (user => {
    const { status, userName } = user

    const classAdded =
      status === 'success'
        ? `Button_personalCabinet Button_personalCabinet_authorized`
        : 'Button_personalCabinet'

    let tooltipText = DICTIONARY.PersonalСabinet[language]
    tooltipText = status === 'success' && userName

    return {
      icon: 'MdPerson',
      classAdded,
      tooltipText,
      tooltipPosition: 'bottom',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'AuthUser',
            isActive: true,
            childProps: { scenario: { branch: 'signIn', step: '' } },
          },
        ],
      },
    }
  })(user)

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
