import { EdgeType, ConnectionType } from '../@types/ConnectionType'

export type GetMappedConnectionToResResType = any[]

interface GetMappedConnectionToResType {
  (
    params: ConnectionType,
    options?: { printRes: boolean }
  ): GetMappedConnectionToResResType
}

/**
 * @description Function to getMappedConnectionToRes
 * @run ts-node src/shared/utils/getMappedConnectionToRes.ts
 * @import import { getMappedConnectionToRes } from './Shared/getMappedConnectionToRes'
 */

export const getMappedConnectionToRes: GetMappedConnectionToResType = (
  connection,
  options
) => {
  let res: any[] = []

  try {
    const edges = connection?.edges

    res = edges.map((edge: EdgeType) => edge.node)

    if (options?.printRes) {
      console.log('getMappedConnectionToRes', { res })
    }
  } catch (error: any) {
    console.log('getMappedConnectionToRes', 'Error', error.message)
  } finally {
    return res
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
