export interface ServersType {
  remote: string
  local: string
  timeout: number
}

/**
 * @import import { SERVERS_MAIN } from './Constants/servers.const'
 */

export const SERVERS_MAIN: ServersType = {
  remote: 'https://yourails.com',
  local: 'http://127.0.0.1:3000',
  timeout: 5000,
}

export const SERVERS_AUTH: Record<string, string> = {
  remote: 'https://yourails.com',
  localWebpack: 'https://yourails.com',
  localServer: 'https://yourails.com',
}

export const SERVERS_ANALYTICS: Record<string, string> = {
  remote: 'https://analytics.userto.com',
  localWebpack: 'http://127.0.0.1:8082',
  localServer: 'http://127.0.0.1:8082',
}

export const SERVERS: Record<string, string> = {
  remote: 'https://yourails.com',
  localWebpack: 'http://localhost:3440',
  localServer: 'http://127.0.0.1:3000',
}
