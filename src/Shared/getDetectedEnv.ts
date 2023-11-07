export const getDetectedEnv: Function = (): string => {
  // console.info('getDetectedEnv [3]', { location })
  return location.hostname === '127.0.0.1' || location.hostname === 'localhost' // && location.port === '3000'
    ? 'localServer'
    : location.hostname === '127.0.0.1' && location.port === '3440'
    ? 'localWebpack'
    : 'remote'
}
