import { select, put, takeEvery, call } from 'redux-saga/effects'

import { COOKIE_ANALYTICSID_NAME } from '../../Constants/cookieAnalyticsIDName.const'
import { cookie } from '../../Shared/cookie'
import { AnalyticsInputType } from '../../Interfaces/AnalyticsInputType'
import { getSavedAnalyticsConnector } from '../../CommunicationLayer/getSavedAnalytics.connector'
import { actionAsync } from '../../DataLayer/index.action'

interface IGetSavedAnalytics {
  type: string
  data: AnalyticsInputType
}

function* getSavedAnalytics(payload: IGetSavedAnalytics): Iterable<any> {
  const {
    data: { initData, event },
  } = payload

  const { analyticsID: analyticsIDStore } = yield select(store => store)

  try {
    const { axiosClient, method, params } = getSavedAnalyticsConnector({
      ...(analyticsIDStore &&
        analyticsIDStore !== 'null' && { analyticsID: analyticsIDStore }),
      ...(initData && { initData }),
      ...(event && { event }),
    })

    const {
      data: {
        data: {
          saveAnalytics: { analyticsID },
        },
      },
    } = yield axiosClient[method]('', params)

    yield put(actionAsync.SAVE_ANALYTICS.SUCCESS({ analyticsID }))

    if (analyticsID && analyticsID !== 'null') {
      const { hostname } = location
      cookie.set(COOKIE_ANALYTICSID_NAME, analyticsID, {
        domain: hostname,
        days: 0.5,
      })
    }
  } catch (error) {
    yield call(() => {})
  }
}

export default function* getSavedAnalyticsSaga() {
  yield takeEvery(actionAsync.SAVE_ANALYTICS.REQUEST().type, getSavedAnalytics)
}
