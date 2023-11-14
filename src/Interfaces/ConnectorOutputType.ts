import { Axios, AxiosRequestHeaders, Method } from 'axios'
export interface ConnectorOutputType {
  testCapture: string
  axiosClient: Axios
  method: Method
  params?: {
    operationName: string
    variables: any
    query: string
  }
}

export { AxiosRequestHeaders, Method } from 'axios'
