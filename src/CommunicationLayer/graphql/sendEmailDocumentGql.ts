import { gql, DocumentNode } from '@apollo/client'

import { FullDocumentTypeFragment } from '../fragments/FullDocumentTypeFragment'

export const sendEmailDocumentGql: DocumentNode = gql`
  query sendEmailDocument(
    $documentID: String!
    $sendTo: String!
    $sendCc: String!
    $sendBcc: String!
  ) {
    sendEmailDocument(
      documentID: $documentID
      sendTo: $sendTo
      sendCc: $sendCc
      sendBcc: $sendBcc
    ) {
      ...FullDocumentTypeFragment
    }
  }
  ${FullDocumentTypeFragment}
`
