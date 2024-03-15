import { getParsedUrlQueryBrowserApi } from './getParsedUrlQuery'

export type GetSetUrlQueryBrowserApiParamsType = {
  searchParamsName: string
  searchParamsValue: string
}

export type GetSetUrlQueryBrowserApiOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetSetUrlQueryBrowserApiResType = string

interface GetSetUrlQueryBrowserApiType {
  (
    params: GetSetUrlQueryBrowserApiParamsType,
    options?: GetSetUrlQueryBrowserApiOptionsType
  ): GetSetUrlQueryBrowserApiResType
}

const optionsDefault: GetSetUrlQueryBrowserApiOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to getSetUrlQueryBrowserApi
 * @run ts-node src/shared/utils/getSetUrlQueryBrowserApi.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getSetUrlQueryBrowserApi.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from '../Shared/getSetUrlQueryBrowserApi'
 */
export const getSetUrlQueryBrowserApi: GetSetUrlQueryBrowserApiType = (
  { searchParamsName, searchParamsValue }: GetSetUrlQueryBrowserApiParamsType,
  optionsIn: GetSetUrlQueryBrowserApiOptionsType = optionsDefault
) => {
  const options: GetSetUrlQueryBrowserApiOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: string = window.location.href

  try {
    const query = getParsedUrlQueryBrowserApi()

    const searchParamsValuePrev = query?.[searchParamsName]

    if (searchParamsValuePrev !== searchParamsValue) {
      let url = new URL(window.location.href)
      if (!searchParamsValue) {
        url.searchParams.delete(searchParamsName)
      } else {
        url.searchParams.set(searchParamsName, searchParamsValue)
      }
      history.pushState({}, '', url.href)

      output = url.href
    }

    if (printRes) {
      console.log('getSetUrlQueryBrowserApi [43]', { output })
    }
  } catch (error: any) {
    console.log('getSetUrlQueryBrowserApi', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const input = {
      searchParamsName: 'string',
      searchParamsValue: 'string',
    }
    const output = getSetUrlQueryBrowserApi(input, { printRes: true })
    console.log('getSetUrlQueryBrowserApi [60]', { input, output })
  })()
}
