import { gql, DocumentNode } from '@apollo/client'

import { FullCourseTypeFragment } from '../fragments/FullCourseTypeFragment'

export const readCoursesConnectionGql: DocumentNode = gql`
  query readCoursesConnection(
    $readCoursesConnectionInput: ReadCoursesConnectionInputType!
  ) {
    readCoursesConnection(
      readCoursesConnectionInput: $readCoursesConnectionInput
    ) {
      edges {
        cursor
        node {
          ...FullCourseType
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${FullCourseTypeFragment}
`
