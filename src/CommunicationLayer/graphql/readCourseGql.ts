import { gql, DocumentNode } from '@apollo/client'

export const readCourseGql: DocumentNode = gql`
  query readCourse($readCourseInput: ReadCourseInputType!) {
    readCourse(readCourseInput: $readCourseInput) {
      ...FullCourseType
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
