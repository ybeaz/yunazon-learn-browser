import React from 'react'
import { getQuesionString } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from 'yourails_common'
import { getProfileActiveToUpdate } from 'yourails_common'
import { ModuleType, MetaCourseType } from 'yourails_common'
import { ScenarioCaseType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type GetScenarioDictPropsType = {
  scenarioCase: ScenarioCaseType
  language: RootStoreType['language']
  capture: string
  right: number
  total: number
  nameFirst: RootStoreType['forms']['user']['nameFirst']
  nameMiddle: RootStoreType['forms']['user']['nameMiddle']
  nameLast: RootStoreType['forms']['user']['nameLast']
  meta?: MetaCourseType | {}
  description: string
  moduleID: ModuleType['moduleID']
  contentID: ModuleType['contentID']
  sub: RootStoreType['authAwsCognitoUserData']['sub']
  handleEvents: HandleEventType
  isEditNameVisible: RootStoreType['componentsState']['isEditNameVisible']
  profiles: RootStoreType['profiles']
}

export type GetScenarioDictResType = {
  scenarioCase: string
  message: { greeting: string; line1: string; line2: string; line3: string }
  buttonForwardProps: ButtonYrlPropsType
}

export type ScenariousType = {
  success: GetScenarioDictResType
  successNoAuth: GetScenarioDictResType
  failure: GetScenarioDictResType
  debug?: GetScenarioDictResType
}

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
    scenarioCase,
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
    handleEvents,
    isEditNameVisible,
    profiles = [],
  } = props

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

  const getProfileActiveToUpdateProps = {
    forms: {
      profileActive: {
        nameFirst,
        nameMiddle,
        nameLast,
      },
    },
    authAwsCognitoUserData: { sub },
    profiles,
  }

  console.info('getScenarioDict [82]', getProfileActiveToUpdateProps)

  const { profileActive, isUpdatingProfile } = getProfileActiveToUpdate(
    getProfileActiveToUpdateProps
  )
  console.info('getScenarioDict [87]', { isUpdatingProfile, profileActive })

  const scenarios: ScenariousType = {
    success: {
      scenarioCase,
      message: {
        greeting: Congratulations,
        line1: `"${capture}"`,
        line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}`,
        line3: `${DICTIONARY.Keep_going[language]}!`,
      },
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_ConfirmEditName',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_CONFIRM_NAMES',
          data: {},
        },
        tooltipText: DICTIONARY.Confirm[language],
        tooltipPosition: 'top',
        captureLeft: DICTIONARY.Confirm[language],
        isDisplaying: isEditNameVisible,
      },
    },

    successNoAuth: {
      scenarioCase,
      message: {
        greeting: Congratulations,
        line1: `"${capture}"`,
        line2: `${isCompletedWith} ${right} ${correctAnsweresFrom} ${total}`,
        line3: `${ToReceiveCertificateLogIn}!`,
      },
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
      message: {
        greeting: YouWereCommittedToSuccess,
        line1: `"${capture}"`,
        line2: `${andThisTimeAnswered} ${right} ${question} ${from} ${total}`,
        line3: `${YouCanTryOnceAgain}!`,
      },
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'CLOSE_MODAL_GET_SCORES',
        },
        handleEvents,
      },
    },
  }

  return scenarios[scenarioCase]
}
