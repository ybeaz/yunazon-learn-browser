import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelAllFragment } from '../fragments/userModelAllFragment'

const queryAstUpdate: DocumentNode = gql`
  mutation updateUser($userInputGraphql2: UserInputGraphql2!) {
    updateUser(userInputGraphql2: $userInputGraphql2) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelAllFragment}
`
export const updateUserQuery = print(queryAstUpdate)
