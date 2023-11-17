import { gql, DocumentNode } from '@apollo/client'

export const getAuthAwsCognitoUserRevokedGql: DocumentNode = gql`
  query getAuthAwsCognitoUserRevoked(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getAuthAwsCognitoUserRevoked(
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
