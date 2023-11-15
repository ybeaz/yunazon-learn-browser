import { DocumentNode } from '@apollo/client'

import { readCoursesConnectionGql } from './graphql/readCoursesConnectionGql'
import { readModuleGql } from './graphql/readModuleGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  readModuleGql,
  readCoursesConnectionGql,
}
