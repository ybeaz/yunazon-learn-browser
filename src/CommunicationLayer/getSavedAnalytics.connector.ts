import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { IAnalyticsInput } from '../Interfaces/IAnalyticsInput'
import { SERVERS_ANALYTICS as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { getAssetHash } from '../Shared/getAssetHash'

interface IGetSavedAnalyticsConnector {
  (props: IAnalyticsInput): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getSavedAnalyticsConnector: IGetSavedAnalyticsConnector =
  props => {
    const hash256 = getAssetHash(props)
    const envType = getDetectedEnv()
    const url = `${SERVERS[envType]}/graphql`

    const obj: IConnectorOutput = {
      testCapture: 'should return 200 code and data defined',
      method: 'post',
      url,
      options: { headers: { ...headers } },
      payload: {
        operationName: 'SaveAnalytics',
        variables: {
          analyticsInput: {
            ...(props.analyticsID && { analyticsID: props.analyticsID }),
            hash256,
            ...(props.initData && { initData: props.initData }),
            ...(props.event && { event: props.event }),
          },
        },
        query:
          'mutation SaveAnalytics($analyticsInput: AnalyticsInput!){saveAnalytics(analyticsInput: $analyticsInput){ analyticsID, hash256, dateCreate, dateUpdate }}',
      },
    }

    return obj
  }
