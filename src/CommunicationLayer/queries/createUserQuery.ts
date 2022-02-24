import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelExtFragment } from '../fragments/userModelFragment'

const queryAstCreate: DocumentNode = gql`
  mutation createUser($userInputGraphql: UserInputGraphql!) {
    createUser(userInputGraphql: $userInputGraphql) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelExtFragment}
`

export const createUserQuery = print(queryAstCreate)
