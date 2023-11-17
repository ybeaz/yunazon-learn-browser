/**
 * @description Function parse and return object fron url query string
 * @param url
 * @returns
 */
export const getParsedUrlQuery: Function = (url: string): any => {
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
