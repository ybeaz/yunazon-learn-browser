import { DocumentNode } from '@apollo/client'

import { readCourseGql } from './graphql/readCourseGql'
import { readModuleGql } from './graphql/readModuleGql'
import { readCoursesConnectionGql } from './graphql/readCoursesConnectionGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  readCourseGql,
  readModuleGql,
  readCoursesConnectionGql,
}
