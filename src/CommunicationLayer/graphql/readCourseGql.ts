import { gql, DocumentNode } from '@apollo/client'

import { FullCourseTypeFragment } from '../fragments/FullCourseTypeFragment'

export const readCourseGql: DocumentNode = gql`
  query readCourse($readCourseInput: ReadCourseInputType!) {
    readCourse(readCourseInput: $readCourseInput) {
      ...FullCourseType
    }
  }
  ${FullCourseTypeFragment}
`
