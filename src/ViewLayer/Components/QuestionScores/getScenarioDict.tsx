import React from 'react'
import { ResultType } from '../../../Shared/getAnswersChecked2'
import { getQuesionString } from '../../../Shared/getQuesionString'
import { DICTIONARY } from '../../../Constants/dictionary.const'

export type GetScenarioDictPropsType = {
  result: ResultType
  language: string
  courseCapture: string
  right: number
  total: number
  userNameFirst: string | undefined
  userNameMiddle: string | undefined
  userNameLast: string | undefined
  meta: any
  description: string
  courseID: string | undefined
  moduleID: string | undefined
  contentID: string | undefined
}

export type GetScenarioDictResType = any

interface GetScenarioDictType {
  (
    props: GetScenarioDictPropsType,
    options?: { printRes?: boolean }
  ): GetScenarioDictResType
}

/**
 * @description Function to getScenarioDict
 * @run ts-node src/shared/utils/getScenarioDict.ts
 * @import import { getScenarioDict } from './getScenarioDict'
 */
export const getScenarioDict: GetScenarioDictType = (
  props: GetScenarioDictPropsType
) => {
  const {
    language,
    right,
    total,
    userNameFirst,
    userNameMiddle,
    userNameLast,
    meta,
    courseCapture,
    description,
    courseID,
    moduleID,
    contentID,
  } = props
  const result = props.result || ''

  const question = getQuesionString(language, right)

  const ToReceiveCertificate = DICTIONARY.ToReceiveCertificate[language]
  const correctAnsweresFrom = DICTIONARY.correctAnsweresFrom[language]
  const andPassedTheTestWith = DICTIONARY.andPassedTheTestWith[language]
  const YouCompletedTheCourse = DICTIONARY.YouCompletedTheCourse[language]
  const Congratulations = DICTIONARY.Congratulations[language]

  const YouCanTryOnceAgain = DICTIONARY.YouCanTryOnceAgain[language]
  const andReceiveTheCertificate = DICTIONARY.andReceiveTheCertificate[language]
  const ThisIsNotEnough = DICTIONARY.ThisIsNotEnough[language]
  const from = DICTIONARY.from[language]
  const andThisTimeAnswered = DICTIONARY.andThisTimeAnswered[language]
  const YouWereCommittedToSuccess =
    DICTIONARY.YouWereCommittedToSuccess[language]

  const scenario: Record<string, any> = {
    success: {
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{courseCapture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificate}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CREATE_DOCUMENT',
          data: {
            screenType: 'Certificate',
            userNameFirst,
            userNameMiddle,
            userNameLast,
            meta,
            capture: courseCapture,
            description,
            courseID,
            moduleID,
            contentID,
          },
        },
      },
    },
    failure: {
      message: (
        <>
          <div className='_greet'>{YouWereCommittedToSuccess}</div>
          <p>
            {andThisTimeAnswered} {right} {question} {from} {total}.
          </p>
          <p>{ThisIsNotEnough}</p>
          <p>{andReceiveTheCertificate}</p>
          <p>{YouCanTryOnceAgain}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CLOSE_MODAL_GET_SCORES',
        },
      },
    },
    debug: {
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{courseCapture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificate}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CREATE_DOCUMENT',
          data: {
            screenType: 'Certificate',
            userNameFirst,
            userNameMiddle,
            userNameLast,
            meta,
            capture: courseCapture,
            description,
            courseID,
            moduleID,
            contentID,
          },
        },
      },
    },
  }[result]

  return scenario
}
