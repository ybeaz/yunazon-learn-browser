/**
 * @description Function parse and return object fron url query string
 * @import import { getParsedUrlQuery } from '../Shared/getParsedUrlQuery'
 */
export const getParsedUrlQuery = (url?: string): any => {
  if (!url) url = location.search
  if (!url.length) return {}

  const query = url.substring(1)

  const result: any = {}
  query.split('&').forEach(function (part) {
    var item = part.split('=')
    result[item[0]] = decodeURIComponent(item[1])
  })
  return result
}

/**
 * @description Function parse and return object fron url query string
 * @import import { getParsedUrlQueryBrowserApi } from '../Shared/getParsedUrlQuery'
 */
export const getParsedUrlQueryBrowserApi = (url?: string): any => {
  if (!url) url = location.search
  if (!url.length) return {}

  const query = url.substring(1)

  const result: any = {}

  const searchParams = new URLSearchParams(query)

  searchParams.forEach((value, key) => {
    result[key] = value.replace(/%23/g, '#')
  })

  return result
}
