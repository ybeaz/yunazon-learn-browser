import { print } from 'graphql'
import { gql, DocumentNode } from '@apollo/client'
import { axiosClient } from './clients/axiosClient'
import { apolloClient } from './clients/apolloClient'

import { ClientHttpType } from '../@types/ClientHttpType'
import { MethodHttpEnumType } from '../@types/MethodHttpType'
import { selectGraphqlHttpClientFlag } from '../FeatureFlags'
import { getObjectCleared } from '../Shared/getObjectCleared'
import * as GraphqlQueries from './graphql'

export type GraphqlQueriesType = Record<string, DocumentNode>

export const graphqlQueries: GraphqlQueriesType = GraphqlQueries

export type GetResponseGraphqlAsyncParamsType = {
  variables: any
  operationName?: string
  resolveGraphqlName?: string
  query?: DocumentNode | string
  mutation?: DocumentNode | string
}

export type GetResponseGraphqlAsyncResType = Promise<any>

interface GetResponseGraphqlAsyncType {
  (
    params: GetResponseGraphqlAsyncParamsType,
    options?: { printRes: boolean }
  ): GetResponseGraphqlAsyncResType
}

/**
 * @description Function to getResponseGraphqlAsync
 * @run ts-node src/CommunicationLayer/getResponseGraphqlAsync.ts
 * @import import { getResponseGraphqlAsync } from './CommunicationLayer/getResponseGraphqlAsync'
 */

export const getResponseGraphqlAsync: GetResponseGraphqlAsyncType = async (
  { variables, resolveGraphqlName: resolveGraphqlNameIn },
  options
) => {
  try {
    const resolveGraphqlName = resolveGraphqlNameIn || ''

    const clientHttpType = selectGraphqlHttpClientFlag()

    const client: any =
      clientHttpType === ClientHttpType['apolloClient']
        ? apolloClient
        : axiosClient

    const documentNode = graphqlQueries[`${resolveGraphqlName}Gql`]

    // @ts-expect-error
    const operationGraphql = documentNode?.definitions[0]?.operation

    let params: GetResponseGraphqlAsyncParamsType = {
      operationName: resolveGraphqlName,
      variables: getObjectCleared(variables, {
        propsToRemove: ['__typename'],
      }),
    }

    let output: any

    if (clientHttpType === ClientHttpType['apolloClient']) {
      let res: any
      if (operationGraphql === 'mutation') {
        params = {
          ...params,
          mutation: documentNode,
        }

        res = await client('/graphql').mutate(params)
      } else {
        params = {
          ...params,
          query: documentNode,
        }
        res = await client('/graphql').query(params)
      }
      output = res?.data[resolveGraphqlName]
    } else if (clientHttpType === ClientHttpType['axiosClient']) {
      params = {
        ...params,
        query: print(documentNode),
      }

      const res: any = await client({
        url: '/graphql',
        data: params,
        method: MethodHttpEnumType['post'],
      })
      output = res?.data?.data[resolveGraphqlName]
    }

    if (options?.printRes) {
      console.log('getResponseGraphqlAsync', 'output', output)
    }

    return output
  } catch (error: any) {
    console.log('getResponseGraphqlAsync', error)
    return
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
