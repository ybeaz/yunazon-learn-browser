import { historyWeb } from '../Navigation/historyWeb'

interface GetRedirectedType {
  (pathnameNext: string | undefined): void
}

/**
 * @description Function to redirect app to the pathname
 * @import import { getRedirected } from '../../../Shared/getRedirected'
 */

export const getRedirected: GetRedirectedType = pathnameNext => {
  if (!pathnameNext) return
  try {
    historyWeb.push(pathnameNext)
  } catch (error: any) {
    const message = error.message
    console.log('getRedirected [21] Error', {
      message,
      pathnameNext,
    })
    window.location.pathname = pathnameNext
  }
}
