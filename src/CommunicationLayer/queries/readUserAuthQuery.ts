import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelExtendedGraphql } from '../fragments/userModelFragment'

const readUserAuthAst: DocumentNode = gql`
  query readUserAuth($userIdAuth: String!) {
    readUserAuth(userIdAuth: $userIdAuth) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelExtendedGraphql}
`

export const readUserAuthQuery = print(readUserAuthAst)
