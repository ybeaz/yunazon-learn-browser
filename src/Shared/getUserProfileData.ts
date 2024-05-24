import { getLocalStorageReadKeyObj } from './getLocalStorageReadKeyObj'
import { getArrayItemByProp } from './getArrayItemByProp'

export type GetUserProfileDataParamsType = {
  sub: string | null
  screenActive: string
  profiles: any
}

export type GetUserProfileDataOptionsType = {
  printRes?: boolean
  parentFunc?: string
}

export type GetUserProfileDataResType = {
  profileIDs: string[]
  learnerUserID: string
}

interface GetUserProfileDataType {
  (
    params: GetUserProfileDataParamsType,
    options?: GetUserProfileDataOptionsType
  ): GetUserProfileDataResType
}

const optionsDefault: Required<GetUserProfileDataOptionsType> = {
  printRes: false,
  parentFunc: '',
}

/**
 * @description Function to getUserProfileData
 * @run ts-node src/shared/utils/getUserProfileData.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getUserProfileData.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getUserProfileData, GetUserProfileDataParamsType } from '../Shared/getUserProfileData'
 */
export const getUserProfileData: GetUserProfileDataType = (
  params: GetUserProfileDataParamsType,
  optionsIn: GetUserProfileDataOptionsType = optionsDefault
) => {
  const options: Required<GetUserProfileDataOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunc } = options
  const parentFuncAdd = parentFunc ? { parentFunc } : {}

  const { sub, screenActive, profiles } = params

  let output: any = {
    profileIDs: [],
    learnerUserID: '',
  }

  if (!sub) return output

  if (screenActive === 'AcademyMatrix' || screenActive === 'ModulesPresent') {
    let sub_localStorage = getLocalStorageReadKeyObj('sub')
    sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
    output.learnerUserID = sub || sub_localStorage
  } else if (screenActive === 'MyModules' || screenActive === 'MyDocuments') {
    const profile = getArrayItemByProp({
      arr: profiles,
      propName: 'userID',
      propValue: sub,
    })

    output.profileIDs = [profile?.profileID]
  }

  if (printRes) {
    console.log('getUserProfileData [63]', { ...parentFuncAdd, output })
  }

  return output
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getUserProfileData.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetUserProfileDataParamsType = {
      sub: '',
      screenActive: 'AcademyMatrix',
      profiles: [],
    }
    const output = await getUserProfileData(params, { printRes: true })
  })()
}
