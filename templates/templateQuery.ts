import { gql, DocumentNode } from '@apollo/client'
import { print } from 'graphql'

export const templateDocument: DocumentNode = gql`
  query GetRecipe($id: String!) {
    recipe(id: $id) {
      id
      title
      description
      ingredients
    }
  }
`

/**
 * @import import { templateQuery } from './graphql/templateQuery'
 */
export const templateQuery = print(templateDocument)
