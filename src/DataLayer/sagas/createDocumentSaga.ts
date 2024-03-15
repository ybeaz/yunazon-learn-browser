import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateDocumentsArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getArrayItemByProp } from '../../Shared/getArrayItemByProp'
import { withDebounce } from '../../Shared/withDebounce'

function* createDocumentGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )
  const {
    profiles,
    modules,
    scorm: { moduleIDActive },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  const module = getArrayItemByProp({
    arr: modules,
    propName: 'moduleID',
    propValue: moduleIDActive,
  })

  const profileCreator = getArrayItemByProp({
    arr: profiles,
    propName: 'profileID',
    propValue: module.creatorID,
  })

  const profileLearner = getArrayItemByProp({
    arr: profiles,
    propName: 'userID',
    propValue: sub,
  })

  try {
    const variables: MutationCreateDocumentsArgs = {
      createDocumentsInput: [
        {
          isActive: true,
          module,
          learner: profileLearner,
          creator: profileCreator,
        },
      ],
    }

    const createDocuments: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createDocuments',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(actionSync.SET_DOCUMENTS(createDocuments))

    return createDocuments
  } catch (error: any) {
    console.info('createDocument [82] ERROR', `${error.name}: ${error.message}`)
  }
}

export const createDocument = withDebounce(createDocumentGenerator, 500)

export default function* createDocumentSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT.REQUEST().type], createDocument)
}
