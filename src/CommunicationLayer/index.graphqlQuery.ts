import { DocumentNode } from '@apollo/client'

import { getAuthAwsCognitoUserRefreshedGql } from './graphql/getAuthAwsCognitoUserRefreshedGql'
import { getAuthAwsCognitoUserRevokedGql } from './graphql/getAuthAwsCognitoUserRevokedGql'
import { getAuthAwsCognitoUserDataGql } from './graphql/getAuthAwsCognitoUserDataGql'
import { readCourseGql } from './graphql/readCourseGql'
import { readModuleGql } from './graphql/readModuleGql'
import { readCoursesConnectionGql } from './graphql/readCoursesConnectionGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  getAuthAwsCognitoUserRefreshedGql,
  getAuthAwsCognitoUserRevokedGql,
  getAuthAwsCognitoUserDataGql,
  readCourseGql,
  readModuleGql,
  readCoursesConnectionGql,
}
