import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  DefaultOptions,
} from '@apollo/client'

import { getHeaders } from './getHeaders'

import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { SERVERS_MAIN, ServersType } from '../../Constants/servers.const'

const envType: string = getDetectedEnv()

const baseURL = SERVERS_MAIN[envType as keyof ServersType] as string

const createHttpLink = (pathname: string): HttpLink => {
  return new HttpLink({
    uri: `${baseURL}${pathname}`,
    headers: getHeaders({ printRes: false }),
  })
}

export const createApolloClient = (
  pathname: string
): ApolloClient<NormalizedCacheObject> => {
  const httpLink = createHttpLink(pathname)

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions,
  })
}

export const apolloClient: any = (pathname: string) =>
  createApolloClient(pathname)
