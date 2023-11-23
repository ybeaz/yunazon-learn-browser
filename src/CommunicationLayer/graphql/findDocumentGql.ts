import { gql, DocumentNode } from '@apollo/client'

import { FullDocumentTypeFragment } from '../fragments/FullDocumentTypeFragment'

export const findDocumentGql: DocumentNode = gql`
  query findDocument($documentID: String!) {
    findDocument(documentID: $documentID) {
      ...FullDocumentTypeFragment
    }
  }
  ${FullDocumentTypeFragment}
`
