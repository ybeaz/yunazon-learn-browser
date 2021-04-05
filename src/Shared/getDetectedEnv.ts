export const getDetectedEnv: Function = (source: string = 'local'): string => {
  // console.info('getDetectedEnv [3]', { location })
  return location.hostname === '127.0.0.1' && location.port === '3440'
    ? 'localWebpack'
    : location.hostname === '127.0.0.1' && location.port === '3000'
    ? 'localServer'
    : 'remote'
}
