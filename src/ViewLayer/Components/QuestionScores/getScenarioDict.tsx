import React from 'react'
import { ResultType } from '../../../Shared/getAnswersChecked2'
import { getQuesionString } from '../../../Shared/getQuesionString'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { GetScenarioDictPropsType } from './QuestionScoresTypes'

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
    nameFirst,
    nameMiddle,
    nameLast,
    meta,
    courseCapture,
    description,
    courseID,
    moduleID,
    contentID,
    sub,
  } = props

  let scenarioCase: string = props.result || ''
  if (!sub && props.result === 'success') {
    scenarioCase = 'successNoAuth'
  }

  console.info('getScenarioDict [45]', {
    sub,
    scenarioCase,
    'props.result': props.result,
  })

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

  // @ts-expect-error
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
            nameFirst,
            nameMiddle,
            nameLast,
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

    successNoAuth: {
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CLICK_ON_SIGN_IN',
          data: {},
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
          <p>
            {ThisIsNotEnough} {andReceiveTheCertificate}
          </p>
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
            nameFirst,
            nameMiddle,
            nameLast,
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
  }[scenarioCase]

  return scenario
}
