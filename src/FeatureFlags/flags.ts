export const isContentInfoLocal: Function = (
  source: string = 'local'
): string => {
  // console.info('flags [3]', { location })
  return location.hostname === '127.0.0.1' && source === 'local'
    ? 'local'
    : 'remote'
}
