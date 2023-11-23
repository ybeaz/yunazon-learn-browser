import { gql, DocumentNode } from '@apollo/client'

import { FullDocumentTypeFragment } from '../fragments/FullDocumentTypeFragment'

export const createDocumentGql: DocumentNode = gql`
  mutation createDocument($createDocumentInput: CreateDocumentInputType!) {
    createDocument(createDocumentInput: $createDocumentInput) {
      ...FullDocumentTypeFragment
    }
  }
  ${FullDocumentTypeFragment}
`
