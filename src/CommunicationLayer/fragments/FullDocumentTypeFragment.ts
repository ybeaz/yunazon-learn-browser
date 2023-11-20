import { gql, DocumentNode } from '@apollo/client'

export const FullDocumentTypeFragment: DocumentNode = gql`
  fragment FullDocumentTypeFragment on DocumentType {
    documentID
    pathName
    courseID
    capture
    description
    meta {
      institution
      specTitle
      specName
    }
    moduleIDs
    contentIDs
    userName {
      firstName
      middleName
      lastName
    }
    creationDate
    lang
    ip
  }
`
