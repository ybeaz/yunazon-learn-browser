import { EdgeType, ConnectionType } from '../@types/ConnectionType'

export type GetMappedConnectionToCoursesResType = any[]

interface GetMappedConnectionToCoursesType {
  (
    params: ConnectionType,
    options?: { printRes: boolean }
  ): GetMappedConnectionToCoursesResType
}

/**
 * @description Function to getMappedConnectionToCourses
 * @run ts-node src/shared/utils/getMappedConnectionToCourses.ts
 * @import import { getMappedConnectionToCourses } from './Shared/getMappedConnectionToCourses'
 */

export const getMappedConnectionToCourses: GetMappedConnectionToCoursesType = (
  connection,
  options
) => {
  let res: any[] = []

  try {
    const edges = connection?.edges

    res = edges.map((edge: EdgeType) => edge.node)

    if (options?.printRes) {
      console.log('getMappedConnectionToCourses [30]', { res })
    }
  } catch (error: any) {
    console.log('getMappedConnectionToCourses', 'Error', error.message)
  } finally {
    return res
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
