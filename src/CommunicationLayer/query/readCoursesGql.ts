import { gql, DocumentNode } from '@apollo/client'

import { FullCourseTypeFragment } from '../fragments/FullCourseTypeFragment'

export const readCoursesGql: DocumentNode = gql`
  query readCourses($readCoursesInput: [ReadCourseInputType!]!) {
    readCourses(readCoursesInput: $readCoursesInput) {
      ...FullCourseType
    }
  }
  ${FullCourseTypeFragment}
`
