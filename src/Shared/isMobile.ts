// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export type IsMobileResType = boolean

interface IsMobileType {
  (): IsMobileResType
}

/**
 * @description Function to isMobile
 * @run ts-node src/shared/utils/isMobile.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/isMobile.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { isMobile } from '../Shared/isMobile'
 */
export const isMobile: IsMobileType = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/isMobile.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: IsMobileParamsType = ''
    const output = isMobile(params, { printRes: true })
    consoler('isMobile [61]', output)
  })()
}
