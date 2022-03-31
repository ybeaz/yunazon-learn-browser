export const SERVERS_AUTH: Record<string, string> = {
  remote: 'https://un.userto.com',
  localWebpack: 'https://un.userto.com',
  localServer: 'https://un.userto.com',
}

export const SERVERS_ANALYTICS: Record<string, string> = {
  remote: 'https://analytics.userto.com',
  localWebpack: 'http://127.0.0.1:8082',
  localServer: 'http://127.0.0.1:8082',
}

export const SERVERS: Record<string, string> = {
  remote: 'https://yourails.com',
  localWebpack: 'http://localhost:3440',
  localServer: 'http://127.0.0.1:3000',
}

export const AWS_COGNITO_API = {
  getTokensOauth2: {
    method: 'post',
    url: 'https://sns-sms-001.auth.us-east-1.amazoncognito.com/oauth2/token',
    headersAdd: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic NG9tOWwwZTI2ZmRiYTdiZXJwaDlwZ3Y2NTE6MTcwYWhvdmQ2YTJucW5qMzRzMmNmazM5N2RqdmxmZXNlbnYyNThoM291YzRra2lmc2g3ZQ==',
    },
    payloadAdd: {
      grant_type: 'authorization_code',
      client_id: '4om9l0e26fdba7berph9pgv651',
      code: '2f0f4d17-7bb9-49c6-9b87-2293ca4b4bd4',
      redirect_uri: SERVERS.localWebpack,
    },
  },
  callbackUrlPart:
    'https://sns-sms-001.auth.us-east-1.amazoncognito.com/login?client_id=4om9l0e26fdba7berph9pgv651&response_type=code&scope=email+openid&redirect_uri=',
}
