import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelExtFragment } from '../fragments/userModelFragment'

const readUserAuthAst: DocumentNode = gql`
  query readUserAuth($userIdAuth: String!) {
    readUserAuth(userIdAuth: $userIdAuth) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelExtFragment}
`

export const readUserAuthQuery = print(readUserAuthAst)
