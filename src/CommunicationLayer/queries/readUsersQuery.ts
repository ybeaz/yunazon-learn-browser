import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelAllFragment } from '../fragments/userModelAllFragment'

const readUsersQueryAst: DocumentNode = gql`
  query readUsers($options: ReadUsersOptions!) {
    readUsers(options: $options) {
      ...UserModelGraphqlAll
    }
  }
  ${userModelAllFragment}
`

export const readUserAuthQuery = print(readUsersQueryAst)
