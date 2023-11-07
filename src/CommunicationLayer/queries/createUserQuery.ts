import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelExtendedGraphql } from '../fragments/userModelFragment'

const queryAstCreate: DocumentNode = gql`
  mutation createUser($userInputGraphql: UserInputGraphql!) {
    createUser(userInputGraphql: $userInputGraphql) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelExtendedGraphql}
`

export const createUserQuery = print(queryAstCreate)
