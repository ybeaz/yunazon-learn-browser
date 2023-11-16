import { useCallback } from 'react'
import { Linking, Alert } from 'react-native'

export interface UseLinkClickResYrlType {
  (url?: string): () => Promise<void> | null | undefined
}

/**
 * @description React Native hook to open external links
 * @import import { useLinkClickResYrl } from './YrlNativeViewLibrary'
 */
export const useLinkClickResYrl: UseLinkClickResYrlType = url => {
  if (!url) return () => undefined

  return useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])
}
