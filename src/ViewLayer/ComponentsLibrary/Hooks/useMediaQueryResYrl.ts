import '@expo/match-media'
import { useMediaQuery } from 'react-responsive'
import { Dimensions } from 'react-native'

export enum DeviceType {
  xsDevice = 'xsDevice',
  smDevice = 'smDevice',
  mdDevice = 'mdDevice',
  lgDevice = 'lgDevice',
  xlDevice = 'xlDevice',
}
export type ScreenCaseType = 'xsSmMd' | 'lgXl'

export type MediaParamsDefaultType = {
  deviceType: DeviceType
  screenCase: ScreenCaseType | 'lgXl'
  width: number | 1024
  height: number | 800
}

export interface UseMediaQueryResYrlType {
  (): MediaParamsDefaultType
}

/**
 * @description React Native hook to determine device type and related parameters to provide adaptive web design
 * @import import { useMediaQueryResYrl } from './YrlNativeViewLibrary'
 * @link https://www.npmjs.com/package/react-responsive
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 16000'
 */
export const useMediaQueryResYrl: UseMediaQueryResYrlType = () => {
  const { width, height } = Dimensions.get('window')

  const isXsDevice = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 480px)',
  })
  const isSmDevice = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)',
  })
  const isMdDevice = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  })
  const isLgDevice = useMediaQuery({
    query: '(min-width: 1025px) and (max-width: 1620px)',
  })
  const isXlDevice = useMediaQuery({
    query: '(min-width: 1621px) and (max-width: 16000px)',
  })

  let deviceType: any = 'xsDevice'
  if (isXsDevice) deviceType = 'xsDevice'
  if (isSmDevice) deviceType = 'smDevice'
  if (isMdDevice) deviceType = 'mdDevice'
  if (isLgDevice) deviceType = 'lgDevice'
  if (isXlDevice) deviceType = 'xlDevice'

  let screenCase: any = 'xsSmMd'
  if (deviceType === 'lgDevice' || deviceType === 'xlDevice')
    screenCase = 'lgXl'

  return {
    deviceType,
    screenCase,
    width,
    height,
  }
}
