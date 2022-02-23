import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelAllFragment } from '../fragments/userModelAllFragment'

const readUserAuthAst: DocumentNode = gql`
  query readUserAuth($userIdAuth: String!) {
    readUserAuth(userIdAuth: $userIdAuth) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelAllFragment}
`

export const readUserAuthQuery = print(readUserAuthAst)
