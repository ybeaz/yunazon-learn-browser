import React, { FunctionComponent } from 'react'
import { Platform } from 'react-native'
import { useSearchParams, useParams, Params } from 'react-router-dom'
import { useSafeAreaInsets, EdgeInsets } from 'react-native-safe-area-context'
import {
  useMediaQueryResYrl,
  MediaParamsDefaultType,
  DeviceType,
} from './useMediaQueryResYrl'

export type WithParamsMediaYrlPropsType =
  | FunctionComponent<any>
  | React.NamedExoticComponent<any>

export interface WithParamsMediaYrlType {
  (Component: WithParamsMediaYrlPropsType):
    | FunctionComponent
    | React.NamedExoticComponent
}

export type UrlParamsDefaultType = Params<string>

export type PlatformOSYrlType = 'ios' | 'android' | 'windows' | 'macos' | 'web'
export type InsetsYrlType = {
  top: number
  bottom: number
  right: number
  left: number
}

export type InsetsType = EdgeInsets

/**
 * @description Function decorator for React Functional Component
 *    to add urlParams and mediaParams property that contains data about the profile's device
 *    from useMediaQueryRes hook:
 *    const { deviceType, screenCase, width, height } = mediaParams
 * @import import { withParamsMediaYrl, UseMediaQueryResYrlType } from './YrlNativeViewLibrary'
 * @use export const Portfolio = withDeviceType(React.memo(PortfolioComponent))
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 16000'
 */

export const mediaParamsDefault: MediaParamsDefaultType = {
  deviceType: DeviceType['lgDevice'],
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export const urlParamsDefault: UrlParamsDefaultType = {
  urlParam1: undefined,
  urlParam2: undefined,
  urlParam3: undefined,
}

export const urlParamsSearchDefault: URLSearchParams = new URLSearchParams('')

export const platformOSDefault: PlatformOSYrlType = 'web'

export const insetsDefault: InsetsType = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

export const withParamsMediaYrl: WithParamsMediaYrlType = function (Component) {
  return function WrappedComponent(props: any) {
    let urlParams: UrlParamsDefaultType = urlParamsDefault
    let urlParamsSearch = urlParamsSearchDefault
    const platformOS: PlatformOSYrlType = platformOSDefault
    let insets: InsetsType = insetsDefault
    if (platformOS === 'web') {
      urlParams = useParams()
      const [urlParamsSearchM1] = useSearchParams()
      urlParamsSearch = urlParamsSearchM1
    } else if (platformOS === 'ios' || platformOS === 'android') {
      insets = useSafeAreaInsets()
    }

    const mediaParams: MediaParamsDefaultType = useMediaQueryResYrl()
    const propsNext = {
      ...props,
      mediaParams,
      urlParams,
      urlParamsSearch,
      platformOS,
      insets,
    }
    return <Component {...propsNext} />
  }
}
