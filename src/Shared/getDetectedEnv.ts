import { CLIENTS_URI } from '../Constants/clientsUri.const'

interface GetDetectedEnv {
  (): keyof typeof CLIENTS_URI
}

/**
 * @description Function to detect environment type
 * @import import { getDetectedEnv } from '../../../Shared/getDetectedEnv'
 */
export const getDetectedEnv: GetDetectedEnv = () => {
  const output: keyof typeof CLIENTS_URI =
    window?.location?.hostname === '127.0.0.1' ||
    window?.location?.hostname === 'localhost'
      ? 'local'
      : 'remote'

  return output
}
