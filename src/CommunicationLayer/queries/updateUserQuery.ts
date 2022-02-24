import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelExtendedGraphql } from '../fragments/userModelFragment'

const queryAstUpdate: DocumentNode = gql`
  mutation updateUser($userInputGraphql2: UserInputGraphql2!) {
    updateUser(userInputGraphql2: $userInputGraphql2) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelExtendedGraphql}
`
export const updateUserQuery = print(queryAstUpdate)
