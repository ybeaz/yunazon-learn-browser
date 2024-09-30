export type GetChunkedArrayResType = any[]

interface GetChunkedArrayType {
  (arr: any[], size: number): GetChunkedArrayResType
}

/**
 * @description Function to getChunkedArray
 * @run ts-node src/Shared/getChunkedArray.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/Shared/getChunkedArray.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getChunkedArray } from 'src/Shared/getChunkedArray'
 */
export const getChunkedArray: GetChunkedArrayType = (arr: any[] = [], size: number) =>
  arr.length > size ? [arr.slice(0, size), ...getChunkedArray(arr.slice(size), size)] : [arr]
