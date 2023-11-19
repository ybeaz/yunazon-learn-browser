import { print } from 'graphql'

import { axiosClient } from './clients/axiosClient'
import { apolloClient } from './clients/apolloClient'

import { ClientHttpType } from '../@types/ClientHttpType'
import { MethodHttpType } from '../@types/MethodHttpType'
import { graphqlQueries } from './index.graphqlQuery'
import { selectGraphqlHttpClientFlag } from '../FeatureFlags'

export type GetResponseGraphqlAsyncParamsType = {
  variables: any
  resolveGraphqlName: string
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
  { variables, resolveGraphqlName },
  options
) => {
  try {
    const clientHttpType = selectGraphqlHttpClientFlag()

    const client: any =
      clientHttpType === ClientHttpType['apolloClient']
        ? apolloClient
        : axiosClient

    const documentNode = graphqlQueries[`${resolveGraphqlName}Gql`]

    // @ts-expect-error
    const operationGraphql = documentNode?.definitions[0]?.operation

    const params = {
      operationName: resolveGraphqlName,
      variables,
      query:
        clientHttpType === ClientHttpType['apolloClient']
          ? documentNode
          : print(documentNode),
    }

    let output: any

    if (clientHttpType === ClientHttpType['apolloClient']) {
      const res: any = await client('/graphql')[operationGraphql](params)
      output = res?.data[resolveGraphqlName]
    } else if (clientHttpType === ClientHttpType['axiosClient']) {
      const res: any = await client({
        url: '/graphql',
        data: params,
        method: MethodHttpType['post'],
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
