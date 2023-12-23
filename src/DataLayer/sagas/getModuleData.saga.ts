import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { CourseType, AcademyPresentCaseEnumType } from '../../@types/'
import { ActionReduxType } from '../../Interfaces'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { withDebounce } from '../../Shared/withDebounce'
import { getSizeWindow } from '../../Shared/getSizeWindow'

function* getModuleDataGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { moduleID },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      readCoursesInput: [
        {
          moduleID,
        },
      ],
    }

    const readCourses: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readCourses',
    })

    const { courses: coursesNext, academyPresentCase } =
      getPreparedCourses(readCourses)

    yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))
    yield put(
      actionSync.SET_COURSE_ID_ACTIVE({ courseID: readCourses?.courseID })
    )

    yield put(actionSync.SET_COURSES(coursesNext))

    if (
      academyPresentCase === AcademyPresentCaseEnumType['courseInProgress'] ||
      academyPresentCase === AcademyPresentCaseEnumType['courseCompleted']
    ) {
      yield put(actionSync.TOGGLE_START_COURSE(true))

      if (
        academyPresentCase === AcademyPresentCaseEnumType['courseCompleted']
      ) {
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
    console.info('getModuleData Error', error.name + ': ' + error.message)
  }
}

export const getModuleData = withDebounce(getModuleDataGenerator, 500)

export default function* getModuleDataSaga() {
  yield takeEvery([actionAsync.GET_MODULE_DATA.REQUEST().type], getModuleData)
}
