import { Axios, Method } from 'axios'

export interface ConnectorOutputType {
  client: Axios
  params?: {
    operationName: string
    variables: any
    query: string
  }
}

export type { Method }
