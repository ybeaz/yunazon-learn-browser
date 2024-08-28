// @ts-nocheck

import { promises as fs } from 'fs'

import { consoler } from './consoler'
import { consolerError } from './consolerError'

export const isLandScape = () => {
  const document: any = window.document
  return window.innerWidth > window.innerHeight
}

export enum GetWentFullScreenModeEnumType {
  fullScreen = 'fullScreen',
  exit = 'exit',
}

export type GetWentFullScreenParamsType = { id: string; mode?: GetWentFullScreenModeEnumType }

export type GetWentFullScreenResType = void

interface GetWentFullScreenType {
  (params: GetWentFullScreenParamsType): GetWentFullScreenResType
}

/**
 * @description Function to getWentFullScreen
 * @run ts-node src/shared/utils/getWentFullScreen.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getWentFullScreen.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getWentFullScreen, GetWentFullScreenParamsType, GetWentFullScreenModeEnumType } from '../Shared/getWentFullScreen'
 */
export const getWentFullScreen: GetWentFullScreenType = async ({
  id,
  mode,
}: GetWentFullScreenParamsType) => {
  const element: any = document.getElementById(id)

  if (!element) return

  try {
    if (mode === GetWentFullScreenModeEnumType['fullScreen']) {
      if (element.requestFullscreen) element.requestFullscreen()
      else if (element.msRequestFullscreen) element.msRequestFullscreen()
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen()
      else if (element.webkitRequestFullScreen) element.webkitRequestFullScreen()
    } else if (mode === GetWentFullScreenModeEnumType['exit']) {
      if (element.mozCancelFullScreen) element.mozCancelFullScreen()
      else if (element.webkitExitFullscreen) element.webkitExitFullscreen()
      else if (element.msExitFullscreen) element.msExitFullscreen()
      else if (element.exitFullscreen) element.exitFullscreen()
    }
  } catch (error) {
    consolerError('getWentFullscreen [58]', error)
  }
}

/**
 * @description Here the file is being run directly
 * @run ts-node src/shared/utils/getWentFullScreen.ts
 */
if (require.main === module) {
  ;(async () => {
    const params: GetWentFullScreenParamsType = {
      id: 'kewJSFjKfPw',
      mode: GetWentFullScreenModeEnumType['fullScreen'],
    }
    getWentFullScreen(params)
  })()
}
