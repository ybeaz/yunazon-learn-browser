import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { userModelFragment } from '../fragments/userModelFragment'

const readUsersQueryAst: DocumentNode = gql`
  query readUsers($options: ReadUsersOptions!) {
    readUsers(options: $options) {
      users {
        ...UserModelGraphqlAll
      }
      responseMessage {
        status
        message
      }
    }
  }
  ${userModelFragment}
`

export const readUsersQuery = print(readUsersQueryAst)

// readUsers(options: $options) {users { ...UserModelGraphqlAll }, responseMessage { status, message }}}
