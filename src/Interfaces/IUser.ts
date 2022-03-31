import { IUserAwsCognitoAuth } from './IUserAwsCognitoAuth'

export interface IUser {
  userAvatar?: string
  userBirthYear?: number
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
  userNameFirst?: string
  userNameLast?: string
  userNameMiddle?: string
  userPasswordAuth?: string
  userPasswordAuth2?: string
  userPhone?: number
  userRoles?: string[]
  userSkillsExpertise?: string[]
  userStatus?: string
  userWebLink?: string
  userWebTokenAuth?: string
  userZoneInfo?: string
  userAwsCognitoAuth: IUserAwsCognitoAuth
}
