import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { CourseType, AcademyPresentCaseEnumType } from '../../@types/'
import { ActionReduxType } from '../../Interfaces'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { getCheckedCoursesAnswered } from '../../Shared/getCheckedCoursesAnswered'
import { withDebounce } from '../../Shared/withDebounce'
import { getSizeWindow } from '../../Shared/getSizeWindow'
import { getCourseByModuleId } from '../../Shared/getCourseByModuleId'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* getModuleDataGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { moduleID },
  } = params

  let coursesNext: CourseType[] = []
  let caseScenario = AcademyPresentCaseEnumType['courseFirstLoading']

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const coursesInProgress =
      getLocalStorageReadKeyObj('coursesInProgress') || []
    const courseInProgres = getCourseByModuleId({
      moduleID,
      courses: coursesInProgress,
    })
    const courseIDInProgres = courseInProgres && courseInProgres.courseID

    /* Case: use courseInProgress from the localStorage */
    if (coursesInProgress && coursesInProgress.length && courseIDInProgres) {
      coursesNext = coursesInProgress

      caseScenario = AcademyPresentCaseEnumType['courseInProgress']
      const isAnswered = getCheckedCoursesAnswered(coursesNext)
      if (isAnswered)
        caseScenario = AcademyPresentCaseEnumType['courseCompleted']
    } else {
      /* Case: initial loading */
      const variables = {
        readCoursesInput: [
          {
            moduleID,
          },
        ],
      }

      const readCourses: any = yield getResponseGraphqlAsync(
        {
          variables,
          resolveGraphqlName: 'readCourses',
        },
        {
          clientHttpType: selectGraphqlHttpClientFlag(),
          timeout: 5000,
        }
      )

      coursesNext = getPreparedCourses(readCourses)
    }

    yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))

    const courseActive = getCourseByModuleId({ moduleID, courses: coursesNext })
    const courseID = courseActive && courseActive.courseID
    yield put(actionSync.SET_COURSE_ID_ACTIVE({ courseID }))

    yield put(actionSync.SET_COURSES(coursesNext))

    if (
      caseScenario === AcademyPresentCaseEnumType['courseInProgress'] ||
      caseScenario === AcademyPresentCaseEnumType['courseCompleted']
    ) {
      yield put(actionSync.TOGGLE_START_COURSE(true))

      if (caseScenario === AcademyPresentCaseEnumType['courseCompleted']) {
        const data = [
          { childName: 'QuestionScores', isActive: true, childProps: {} },
        ]
        yield put(actionSync.SET_MODAL_FRAMES(data))
      }
    }

    const { width } = getSizeWindow()
    if (width <= 480) {
      yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
    }

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getModuleData [95] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModuleData = withDebounce(getModuleDataGenerator, 500)

export default function* getModuleDataSaga() {
  yield takeEvery([actionAsync.GET_MODULE_DATA.REQUEST().type], getModuleData)
}
