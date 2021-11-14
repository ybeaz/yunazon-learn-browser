import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { Button } from '../Components/Button'
import { LANGUAGES_APP } from '../../Constants/languagesApp.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IUser, IRootStore } from '../../Interfaces/IRootStore'
import { SelectLanguage } from '../Components/SelectLanguage'
import { LogoGroup } from '../Components/LogoGroup'
import { ModalFrames } from '../Frames/ModalFrames'
interface HeaderFrameArgs {
  brandName?: string
  contentComponentName?: string
  children: any[]
}

export const HeaderFrame: React.FunctionComponent<HeaderFrameArgs> = props => {
  const { brandName, contentComponentName } = props
  const { user, language } = useSelector((store2: IRootStore) => store2)

  const getButtonAuthUser = (user2: IUser): any => {
    const status = user2?.status
    const userName = user2?.userName

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

  const toggleTheme = DICTIONARY['Toggle site theme'][language]
  const buttonThemeToggle = {
    icon: 'FaYinYang',
    classAdded: 'Button_ThemeToggle',
    tooltipText: toggleTheme,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'TOGGLE_THEME' },
  }

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_AcademyPresent'
      : ''

  const selectLanguageProps = {
    languages: LANGUAGES_APP,
    defaultLanguage: language,
    mode: null,
    typeEvent: 'APP_SELECT_LANGUAGE',
  }

  return (
    <div className={`HeaderFrame ${classAddHeaderFrame}`}>
      <div className='__left'>
        {props.children[0]}
        <LogoGroup brandName={brandName} />
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
          <SelectLanguage {...selectLanguageProps} />
        </div>
        <div className='_itemButtonThemeToggle'>
          <Button {...buttonThemeToggle} />
        </div>
      </div>
      <ModalFrames />
    </div>
  )
}
