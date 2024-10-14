import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateProfilesArgs, ProfileNatureType } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withDebounce } from 'yourails_common'

function* createProfileGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { sub, email },
  } = params

  const nameFirst = email.split('@')[0]

  try {
    const variables: MutationCreateProfilesArgs = {
      createProfilesInput: [
        {
          userID: sub,
          profileName: `@${nameFirst}`,
          isActive: true,
          profileNature: ProfileNatureType['Human'],
          nameFirst,
          nameMiddle: null,
          nameLast: null,
          position: 0,
          avatarSrc: null,
          avatarSize: null,
          phones: [],
          emails: [email],
          messengers: [],
          locations: [],
          serviceSpecs: [],
          description: null,
          imagePendingSrc: null,
          pendingText: null,
          help: null,
          promptExamples: [],
          disclaimer: null,
          affiliation: null,
          jobTitle: null,
          awards: [],
          urls: [],
        },
      ],
    }

    const createProfiles: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['createProfiles'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(actionSync.SET_PROFILES(createProfiles))

    return createProfiles[0]
  } catch (error: any) {
    console.info('createProfile [82] ERROR', `${error.name}: ${error.message}`)
  }
}

export const createProfile = withDebounce(createProfileGenerator, 500)

export default function* createProfileSaga() {
  yield takeEvery([actionAsync.CREATE_PROFILE.REQUEST().type], createProfile)
}
