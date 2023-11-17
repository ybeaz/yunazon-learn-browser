import { DocumentNode } from '@apollo/client'

import { getRefreshedUserAuthAwsCognitoGql } from './graphql/getRefreshedUserAuthAwsCognitoGql'
import { getRevokedUserAuthAwsCognitoGql } from './graphql/getRevokedUserAuthAwsCognitoGql'
import { getUserIdDataAwsCognitoGql } from './graphql/getUserIdDataAwsCognitoGql'
import { readCourseGql } from './graphql/readCourseGql'
import { readModuleGql } from './graphql/readModuleGql'
import { readCoursesConnectionGql } from './graphql/readCoursesConnectionGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  getRefreshedUserAuthAwsCognitoGql,
  getRevokedUserAuthAwsCognitoGql,
  getUserIdDataAwsCognitoGql,
  readCourseGql,
  readModuleGql,
  readCoursesConnectionGql,
}
