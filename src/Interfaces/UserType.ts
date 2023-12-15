import { UserAwsCognitoAuthType } from './UserAwsCognitoAuthType'

export interface UserType {
  userAvatar?: string
  userBirthYear?: number | null
  userDateCreated?: string
  userDateDeleted?: string
  userDateUpdated?: string
  userEmail?: string
  userGender?: string
  userIdProfile?: string
  userIdAuth?: string
  userIdExternal?: string
  userInfoAbout?: string
  userLanguages?: string[]
  userLocaleCity?: string
  userLocaleCountry?: string
  userLoginSource?: string
  userMedia?: string[]
  userName?: string
  userNameNick?: string
  nameFirst?: string
  nameLast?: string
  nameMiddle?: string
  userPasswordAuth?: string
  userPasswordAuth2?: string
  userPhone?: number | null
  userRoles?: string[]
  userSkillsExpertise?: string[]
  userStatus?: string
  userWebLink?: string
  userWebTokenAuth?: string
  userZoneInfo?: string
  userAwsCognitoAuth: UserAwsCognitoAuthType
}
