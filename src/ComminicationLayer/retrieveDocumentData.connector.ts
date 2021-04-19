import { SERVERS } from '../Constants/servers.const'
import { PATH_NAME_LOADED_VARS } from '../Constants/pathNameLoadedVars.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const retrieveDocumentDataConnector: Function = (vars: any): any => {
  const envType = getDetectedEnv('localServer')
  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    data: {
      operationName: 'AddDocument',
      variables: {
        newDocumentInputGraphql: vars,
      },
      query: `mutation AddDocument($newDocumentInputGraphql: NewDocumentInputGraphql!){ addDocument(newDocumentInputGraphql: $newDocumentInputGraphql){ ...DocumentModelGraphqlAll  }} fragment DocumentModelGraphqlAll on DocumentModelGraphql {documentID, slug, courseID, capture, description,  meta { institution, specTitle, specName },  moduleIDs, contentIDs, userName, userEmail, creationDate, lang, env}`,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
