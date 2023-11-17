import { gql, DocumentNode } from '@apollo/client'

export const getRefreshedUserAuthAwsCognitoGql: DocumentNode = gql`
  query getRefreshedUserAuthAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getRefreshedUserAuthAwsCognito(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      message
    }
  }
`
