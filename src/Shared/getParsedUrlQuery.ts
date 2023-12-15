/**
 * @description Function parse and return object fron url query string
 * @import import { getParsedUrlQuery } from 'src/Shared/getParsedUrlQuery'
 */
export const getParsedUrlQuery = (url?: string): any => {
  if (!url) url = location.search
  if (!url.length) return {}

  var query = url.substring(1)

  var result: any = {}
  query.split('&').forEach(function (part) {
    var item = part.split('=')
    result[item[0]] = decodeURIComponent(item[1])
  })
  return result
}
