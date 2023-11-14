/**
 * @import import { EdgeType, ConnectionType } from './@types/ConnectionType'
 */

export type EdgeType = {
  cursor: string
  node: any
}

export type ConnectionType = {
  edges: EdgeType[]
  pageInfo: {
    hasNextPage: boolean
    endCursor: string
  }
}
