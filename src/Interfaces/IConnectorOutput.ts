export interface IHeaders {
  'Access-Control-Allow-Origin': string
  'Content-Type': string
  timestamp: number
}

export interface IConnectorOutput {
  testCapture: string
  method: string
  payload?: any
  options: { headers: IHeaders }
  url: string
}
