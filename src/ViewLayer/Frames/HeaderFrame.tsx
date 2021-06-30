import React from 'react'

import { useSelector } from 'react-redux'
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

  const createCourseQuiz = DICTIONARY.reateCourseQuiz[language]
  const buttonAddCourseProps = {
    icon: 'MdQueue', // 'MdAddBox',
    classAdded: 'Button_AddCourse',
    tooltipText: createCourseQuiz,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
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
        <div className='_itemLanguageSelect'>
          <LanguageSelect />
        </div>
      </div>
    </div>
  )
}
