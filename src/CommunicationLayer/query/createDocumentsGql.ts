import { gql, DocumentNode } from '@apollo/client'

import { FullDocumentTypeFragment } from '../fragments/FullDocumentTypeFragment'

export const createDocumentsGql: DocumentNode = gql`
  mutation createDocuments($createDocumentsInput: [CreateDocumentInputType!]!) {
    createDocuments(createDocumentsInput: $createDocumentsInput) {
      ...FullDocumentType
    }
  }
  ${FullDocumentTypeFragment}
`
