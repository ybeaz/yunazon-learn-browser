import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateDocumentsArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { getLimitedObjProp } from 'yourails_common'
import { UPDATE_MODULE_FOR_DOCUMENT_INPUT_TYPE_PROPS } from 'yourails_common'
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

  const profileLearner = getArrayItemByProp({
    arr: profiles,
    propName: 'userID',
    propValue: sub,
  })

  const moduleForDocument = getLimitedObjProp({
    obj: module,
    propsNames: UPDATE_MODULE_FOR_DOCUMENT_INPUT_TYPE_PROPS,
  })

  const variables: MutationCreateDocumentsArgs = {
    createDocumentsInput: [
      {
        isActive: true,
        module: moduleForDocument,
        learner: profileLearner,
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
