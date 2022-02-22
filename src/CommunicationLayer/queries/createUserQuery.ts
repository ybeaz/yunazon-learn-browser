import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelAllFragment } from '../fragments/userModelAllFragment'

const queryAstCreate: DocumentNode = gql`
  mutation createUser($userInputGraphql: UserInputGraphql!) {
    createUser(userInputGraphql: $userInputGraphql) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelAllFragment}
`

export const createUserQuery = print(queryAstCreate)
