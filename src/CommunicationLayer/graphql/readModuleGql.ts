import { gql, DocumentNode } from '@apollo/client'

export const readModuleGql: DocumentNode = gql`
  query readModule($moduleID: String!) {
    readModule(moduleID: $moduleID) {
      ...FullModuleType
    }
  }
  fragment FullModuleType on ModuleType {
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
`
