import { CLIENTS } from '../Constants/clients.const'

interface GetDetectedEnv {
  (): keyof typeof CLIENTS
}

/**
 * @description Function to detect environment type
 * @import import { getDetectedEnv } from '../../../Shared/getDetectedEnv'
 */
export const getDetectedEnv: GetDetectedEnv = () => {
  const output: keyof typeof CLIENTS =
    window?.location?.hostname === '127.0.0.1' ||
    window?.location?.hostname === 'localhost'
      ? 'local'
      : 'remote'

  return output
}
