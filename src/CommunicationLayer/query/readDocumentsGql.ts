import { gql, DocumentNode } from '@apollo/client'

import { FullDocumentTypeFragment } from '../fragments/FullDocumentTypeFragment'

export const readDocumentsGql: DocumentNode = gql`
  query readDocuments($readDocumentsIdsInput: [String!]!) {
    readDocuments(readDocumentsIdsInput: $readDocumentsIdsInput) {
      ...FullDocumentType
    }
  }
  ${FullDocumentTypeFragment}
`
