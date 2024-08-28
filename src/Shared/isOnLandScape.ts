// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type IsOnLandScapeResType = boolean

interface IsOnLandScapeType {
  (): IsOnLandScapeResType
}

/**
 * @description Function to isOnLandScape
 * @run ts-node src/shared/utils/isOnLandScape.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/isOnLandScape.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { isOnLandScape } from '../Shared/isOnLandScape'
 */
export const isOnLandScape: IsOnLandScapeType = () => window.innerWidth > window.innerHeight

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/isOnLandScape.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: IsOnLandScapeParamsType = ''
    const output = isOnLandScape(params, { printRes: true })
    consoler('isOnLandScape [61]', output)
  })()
}
