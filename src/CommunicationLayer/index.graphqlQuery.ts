import { DocumentNode } from '@apollo/client'

import { readCoursesConnectionGql } from './graphql/readCoursesConnectionGql'

export type GraphqlQueriesType = Record<string, DocumentNode>

/**
 * @import import { graphqlQueries } from './index.graphqlQuery'
 */

export const graphqlQueries: GraphqlQueriesType = {
  readCoursesConnectionGql,
}
