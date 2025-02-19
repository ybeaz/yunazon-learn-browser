import React from 'react'
import { getQuesionString } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { GetScenarioDictPropsType } from './QuestionScoresTypes'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { withPropsYrl } from 'yourails_common'

export type GetScenarioDictResType = any

interface GetScenarioDictType {
  (props: GetScenarioDictPropsType): GetScenarioDictResType
}

/**
 * @description Function to getScenarioDict
 * @run ts-node src/shared/utils/getScenarioDict.ts
 * @import import { getScenarioDict } from './getScenarioDict'
 */
export const getScenarioDict: GetScenarioDictType = (props: GetScenarioDictPropsType) => {
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
    sub,
    navigate,
    handleEvents,
  } = props

  let scenarioCase: string = props.result || ''
  if (!sub && props.result === 'success') {
    scenarioCase = 'successNoAuth'
  }

  const question = getQuesionString(language, right)

  const ToReceiveCertificateFillTheForm = DICTIONARY.ToReceiveCertificateFillTheForm[language]
  const ToReceiveCertificateLogIn = DICTIONARY.ToReceiveCertificateLogIn[language]
  const correctAnsweresFrom = DICTIONARY.correctAnsweresFrom[language]
  const isCompletedWith = DICTIONARY.is_completed_with[language]
  const Congratulations = DICTIONARY.Congratulations[language]

  const YouCanTryOnceAgain = DICTIONARY.YouCanTryOnceAgain[language]
  const andReceiveTheCertificate = DICTIONARY.andReceiveTheCertificate[language]
  const ThisIsNotEnough = DICTIONARY.ThisIsNotEnough[language]
  const from = DICTIONARY.from[language]
  const andThisTimeAnswered = DICTIONARY.andThisTimeAnswered[language]
  const YouWereCommittedToSuccess = DICTIONARY.YouWereCommittedToSuccess[language]

  const scenario: Record<string, any> = {
    success: {
      scenarioCase,
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>"{capture}"</p>
          <p>
            {isCompletedWith} {right} {correctAnsweresFrom} {total}
          </p>
          <span>{DICTIONARY.Keep_going[language]}!</span>
        </>
      ),
      // buttonForwardProps: {
      //   icon: 'MdForward',
      //   classAdded: 'Button_MdForward2',
      //   action: {
      //     typeEvent: 'CREATE_DOCUMENT',
      //     data: {
      //       screenType: 'Certificate',
      //       navigate,
      //     },
      //   },
      //   handleEvents,
      // },
    },

    successNoAuth: {
      scenarioCase,
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>"{capture}"</p>
          <p>
            {isCompletedWith} {right} {correctAnsweresFrom} {total}
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
        handleEvents,
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
        handleEvents,
      },
    },

    debug: {
      scenarioCase,
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>"{capture}"</p>
          <p>
            {isCompletedWith} {right} {correctAnsweresFrom} {total}
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
        handleEvents,
      },
    },
  }[scenarioCase]

  return scenario
}
