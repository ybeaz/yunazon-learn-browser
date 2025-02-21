import { consoler } from 'yourails_common'
import {
  withTryCatchFinallyWrapper,
  FuncModeEnumType,
  WithTryCatchFinallyWrapperOptionsType,
} from 'yourails_common'
import { ModuleType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getMapJourneyData } from 'yourails_common'
import { QuestionScoresPropsOutType } from './QuestionScoresTypes'
import { GetScenarioDictResType } from './getScenarioDict'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

type GetQuestionScoresPropsOutParamsType = {
  navigate: any
  modules: ModuleType[]
  queryUrl: any
  handleEvents: HandleEventType
  scenario: GetScenarioDictResType
  isEditNameVisible: boolean
  language: RootStoreType['language']
  nameFirst: RootStoreType['forms']['user']['nameFirst']
  nameLast: RootStoreType['forms']['user']['nameLast']
}

type GetQuestionScoresPropsOutOptionsType = { funcParent?: string }

type GetQuestionScoresPropsOutResType = QuestionScoresPropsOutType

interface GetQuestionScoresPropsOutType {
  (
    params: GetQuestionScoresPropsOutParamsType,
    options?: GetQuestionScoresPropsOutOptionsType
  ): GetQuestionScoresPropsOutResType
}

const optionsDefault: Required<GetQuestionScoresPropsOutOptionsType> = {
  funcParent: 'getQuestionScoresPropsOut',
}

const resDefault: GetQuestionScoresPropsOutResType | any = {}

/**
 * @description Function to getQuestionScoresPropsOut
 * @test yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts --coverage --collectCoverageFrom="src/ViewLayer/Components/QuestionScores/getQuestionScoresPropsOut.ts"
 * @import import { getQuestionScoresPropsOut } from './getQuestionScoresPropsOut'
 */

const getQuestionScoresPropsOutUnsafe: GetQuestionScoresPropsOutType = ({
  navigate,
  modules,
  queryUrl,
  handleEvents,
  scenario,
  isEditNameVisible,
  language,
  nameFirst,
  nameLast,
}: GetQuestionScoresPropsOutParamsType) => {
  console.info('getQuestionScoresPropsOut [64]', {
    navigate,
    modules,
    queryUrl,
    handleEvents,
    scenario,
    isEditNameVisible,
    language,
    nameFirst,
    nameLast,
  })

  const openClose = isEditNameVisible ? DICTIONARY.Close[language] : DICTIONARY.Open[language]

  const propsOut: QuestionScoresPropsOutType = {
    navLinkNextTaskProps: {
      to: {
        pathname: getMapJourneyData({ modules }).find(
          ({ isNextModule }: { isNextModule: boolean }) => isNextModule
        )?.pathnameModule,
        search: queryUrl,
      },
    },
    buttonNextTaskProps: {
      icon: 'MdForward',
      classAdded: 'Button_NextTask',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: DICTIONARY.Next_task[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    navLinkCreditProps: {
      to: { pathname: '/' },
    },
    buttonCreditProps: {
      icon: 'MdForward',
      classAdded: 'Button_Credit',
      handleEvents,
      action: {},
      tooltipText: DICTIONARY.View_reward[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.View_reward[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    buttonEditNameProps: {
      icon: 'MdForward',
      classAdded: 'Button_EditName',
      handleEvents,
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: !isEditNameVisible,
        },
      },
      tooltipText: `${openClose} ${DICTIONARY.edit_name[language]}`,
      tooltipPosition: 'top',
      captureLeft: `${openClose} ${DICTIONARY.edit_name[language]}`,
      isDisplaying: !(isEditNameVisible && (!nameFirst || !nameLast)),
    },
    buttonConfirmEditNameProps: scenario.buttonForwardProps,
    navLinkAchievementsProps: {
      to: { pathname: '/my-documents' },
    },
    buttonAchievementsProps: {
      icon: 'MdForward',
      classAdded: 'Button_Achievements',
      handleEvents,
      action: {},
      tooltipText: DICTIONARY.Achievements[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.Achievements[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    navLinkAllMissionsProps: {
      to: {
        pathname: '/',
        search: queryUrl,
      },
      /* onClick: () => navigate(-1), Alternative*/
    },
    buttonAllMissionsProps: {
      icon: 'MdForward',
      classAdded: 'Button_BackToTopic',
      handleEvents,
      action: {},
      tooltipText: DICTIONARY.Back_to_topic[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.Back_to_topic[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    formInputNamesProps: {
      language,
      handleEvents,
    },
  }

  return propsOut
}

const getQuestionScoresPropsOut = withTryCatchFinallyWrapper(getQuestionScoresPropsOutUnsafe, {
  optionsDefault,
  resDefault,
  funcMode: FuncModeEnumType.common,
  isFinally: false,
})

export { getQuestionScoresPropsOut, getQuestionScoresPropsOutUnsafe }
export type {
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutOptionsType,
  GetQuestionScoresPropsOutResType,
  GetQuestionScoresPropsOutType,
}
