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
    capture,
    description,
    moduleID,
    contentID,
    creatorID,
    sub,
    navigate,
  } = props

  let scenarioCase: string = props.result || ''
  if (!sub && props.result === 'success') {
    scenarioCase = 'successNoAuth'
  }

  const question = getQuesionString(language, right)

  const ToReceiveCertificateFillTheForm =
    DICTIONARY.ToReceiveCertificateFillTheForm[language]
  const ToReceiveCertificateLogIn =
    DICTIONARY.ToReceiveCertificateLogIn[language]
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
      scenarioCase,
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{capture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificateFillTheForm}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CREATE_DOCUMENT',
          data: {
            screenType: 'Certificate',
            creatorID,
            navigate,
          },
        },
      },
    },

    successNoAuth: {
      scenarioCase,
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{capture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificateLogIn}</p>
        </>
      ),
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
      scenarioCase,
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
      scenarioCase,
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{capture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificateFillTheForm}</p>
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
            capture,
            description,
            courseID: undefined /* Not used for now */,
            moduleID,
            contentID,
          },
        },
      },
    },
  }[scenarioCase]

  return scenario
}
