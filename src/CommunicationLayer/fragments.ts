export const FRAGMENTS = {
  DocumentModelGraphqlAll: `DocumentModelGraphqlAll on DocumentModelGraphql {documentID, pathName, courseID, capture, description,  meta { institution, specTitle, specName, email, isSendingBcc },  moduleIDs, contentIDs, userName { firstName, middleName, lastName }, creationDate, lang, env}`,
  UserModelGraphqlAll:
    'UserModelGraphqlAll on UserModelGraphql {responseMessage { status, message }, userIdProfile, userIdAuth, userDateCreated, userDateUpdated, userDateDeleted, userAvatar, userBirthYear, userEmail, userGender, userInfoAbout, userLanguages, userLocaleCity, userLocaleCountry, userMedia, userName, userNameNick, userSkillsExpertise}',
}
