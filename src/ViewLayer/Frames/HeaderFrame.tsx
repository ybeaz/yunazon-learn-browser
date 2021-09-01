import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { Button } from '../Components/Button'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IUser, IRootStore } from '../../Interfaces/IRootStore'
import { LanguageSelect } from '../Components/LanguageSelect'
import { LogoGroup } from '../Components/LogoGroup'
import { ModalFrames } from '../Frames/ModalFrames'
interface IHeaderFrameInput {
  contentComponentName: string
  children: React.ReactChildren
}

export const HeaderFrame: React.FunctionComponent<any> = (
  props: IHeaderFrameInput
): JSX.Element => {
  const { contentComponentName } = props
  const { user, language } = useSelector((store: IRootStore) => store)

  const getButtonAuthUser = (user: IUser): any => {
    const status = user?.status
    const userName = user?.userName

    const classAdded =
      status === 'success'
        ? `Button_personalCabinet Button_personalCabinet_authorized`
        : 'Button_personalCabinet'

    const tooltipText =
      status === 'success' ? userName : DICTIONARY.PersonalСabinet[language]

    const childProps =
      status === 'success'
        ? { scenario: { branch: 'signOut', step: '' } }
        : { scenario: { branch: 'signInManually', step: '' } }

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
            childProps,
          },
        ],
      },
    }
  }

  const [buttonAuthUser, setButtonAuthUser] = useState(getButtonAuthUser(user))

  useEffect(() => {
    setButtonAuthUser(getButtonAuthUser(user))
  }, [user])

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]
  const buttonAddCourseProps = {
    icon: 'MdQueue',
    classAdded: 'Button_AddCourse',
    tooltipText: createCourseQuiz,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
  }

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_AcademyPresent'
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
