import axios, { AxiosRequestHeaders } from 'axios'

import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { SERVERS_MAIN, ServersType } from '../../Constants/servers.const'
import { getHeaders } from './getHeaders'

const envType: string = getDetectedEnv()

const baseURL = SERVERS_MAIN[envType as keyof ServersType] as string
const { timeout } = SERVERS_MAIN

export const axiosClient = () =>
  axios.create({
    baseURL: `${baseURL}`,
    timeout,
    headers: getHeaders({ printRes: false }),
  })
