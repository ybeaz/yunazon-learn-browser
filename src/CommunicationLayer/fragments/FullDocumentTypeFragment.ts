import { gql, DocumentNode } from '@apollo/client'

export const FullDocumentTypeFragment: DocumentNode = gql`
  fragment FullDocumentType on DocumentType {
    capture
    contentIDs
    courseID
    dateCreated
    dateDeleted
    dateUpdated
    description
    documentID
    ipClient
    isActive
    language
    meta {
      email
      institution
      isSendingBcc
      specName
      specTitle
      stages
      tags
    }
    moduleIDs
    pathName
    profileID
    profileProps {
      nameFirst
      nameLast
      nameMiddle
    }
  }
`
