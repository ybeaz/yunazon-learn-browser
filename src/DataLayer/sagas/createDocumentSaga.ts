import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateDocumentsArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getArrayItemByProp } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* createDocumentGenerator(params: ActionReduxType | any): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)
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
    const moduleForDocument = { ...module }

    ;['article', 'transcriptList', 'questions', 'objections'].forEach(
      (prop: string) => delete moduleForDocument[prop]
    )

    const variables: MutationCreateDocumentsArgs = {
      createDocumentsInput: [
        {
          isActive: true,
          module: moduleForDocument,
          learner: profileLearner,
          creator: profileCreator,
        },
      ],
    }

    const createDocuments: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['createDocuments'],
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

export const createDocument = withDebounce(
  withTryCatchFinallySaga(createDocumentGenerator, {
    optionsDefault: { funcParent: 'createDocumentSaga' },
    resDefault: [],
  }),
  500
)

export default function* createDocumentSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT.REQUEST().type], createDocument)
}
