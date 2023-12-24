import { historyWeb } from '../Navigation/historyWeb'

export type GetRedirectedParamsType = string | undefined

export type GetRedirectedOptionsType = {
  printRes?: boolean
  parentFunction?: string
  isOrigin?: boolean
}

export type GetRedirectedResType = void

interface GetRedirectedType {
  (
    pathnameNext: GetRedirectedParamsType,
    options?: GetRedirectedOptionsType
  ): GetRedirectedResType
}

const optionsDefault: Required<GetRedirectedOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
  isOrigin: false,
}

/**
 * @description Function to redirect app to the pathname
 * @import import { getRedirected } from '../Shared/getRedirected'
 */

export const getRedirected: GetRedirectedType = (pathnameNext, optionsIn) => {
  const options: Required<GetRedirectedOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction, isOrigin } = options

  if (!pathnameNext) return

  try {
    if (!isOrigin) historyWeb.push(pathnameNext)
    else window.location.href = `${window.location.origin}${pathnameNext}`

    if (printRes)
      console.log('getRedirected [42]', { pathnameNext, parentFunction })
  } catch (error: any) {
    if (printRes) {
      const message = error.message
      console.log('getRedirected [46]', {
        pathnameNext,
        parentFunction,
        error: message,
      })
    }
    window.location.pathname = pathnameNext
  }
}
