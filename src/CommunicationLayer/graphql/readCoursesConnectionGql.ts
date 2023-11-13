import { gql, DocumentNode } from '@apollo/client'

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
  fragment FullCourseType on CourseType {
    courseID
    capture
    description
    language
    isActive
    dateCreated
    dateUpdated
    dateDeleted
    questionNumber
    passRate
    meta {
      institution
      specTitle
      specName
      email
      isSendingBcc
    }
    modules {
      moduleID
      index
      isActive
      contentType
      contentID
      capture
      duration
      questions {
        capture
        isActive
        options {
          label
          status
        }
      }
    }
  }
`
