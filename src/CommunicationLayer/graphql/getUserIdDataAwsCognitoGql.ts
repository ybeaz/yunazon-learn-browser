import { gql, DocumentNode } from '@apollo/client'

export const getUserIdDataAwsCognitoGql: DocumentNode = gql`
  query getUserIdDataAwsCognito(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getUserIdDataAwsCognito(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      refresh_token
      message
    }
  }
`
