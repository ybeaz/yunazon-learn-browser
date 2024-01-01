import { EdgeType, ConnectionType } from '../@types/ConnectionType'

export type GetMappedConnectionToItemsResType = any[]

interface GetMappedConnectionToItemsType {
  (
    params: ConnectionType,
    options?: { printRes: boolean }
  ): GetMappedConnectionToItemsResType
}

/**
 * @description Function to getMappedConnectionToItems
 * @run ts-node src/shared/utils/getMappedConnectionToItems.ts
 * @import import { getMappedConnectionToItems } from './Shared/getMappedConnectionToItems'
 */

export const getMappedConnectionToItems: GetMappedConnectionToItemsType = (
  connection,
  options
) => {
  let res: any[] = []

  try {
    const edges = connection?.edges

    res = edges.map((edge: EdgeType) => edge.node)

    if (options?.printRes) {
      console.log('getMappedConnectionToItems [30]', { res })
    }
  } catch (error: any) {
    console.log('getMappedConnectionToItems', 'Error', error.message)
  } finally {
    return res
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
