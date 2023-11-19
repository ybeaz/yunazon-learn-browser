import axios, { AxiosRequestHeaders } from 'axios'

import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { SERVERS_MAIN, ServersType } from '../../Constants/servers.const'

const headers: Pick<
  AxiosRequestHeaders,
  'Access-Control-Allow-Origin' | 'Content-Type' | 'timestamp'
> = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: `${+new Date()}`,
}

const envType: string = getDetectedEnv()

const baseURL = SERVERS_MAIN[envType as keyof ServersType] as string
const { timeout } = SERVERS_MAIN

export const axiosClient = axios.create({
  baseURL: `${baseURL}`,
  timeout,
  headers,
})
