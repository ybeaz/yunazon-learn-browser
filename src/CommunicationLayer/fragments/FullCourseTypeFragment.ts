import { gql, DocumentNode } from '@apollo/client'

export const FullCourseTypeFragment: DocumentNode = gql`
  fragment FullCourseType on CourseType {
    courseID
    profileID
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
      stages
      tags
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
        questionID
        capture
        isActive
        options {
          optionID
          label
          status
        }
      }
    }
  }
`
