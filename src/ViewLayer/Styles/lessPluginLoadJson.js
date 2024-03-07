const axios = require('axios').default

import { SERVERS_MAIN } from '../../Constants/servers.const' // ${SERVERS_MAIN.remote}

/**
 * @description: Not used, experimented with changing less files directly
 *                here with async loading config data
 */
module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('loadJson', async function () {
      // Loader context is available in `less.webpackLoaderContext`
      console.info('lessPluginLoadJson [5]')

      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        timestamp: +new Date(),
      }

      try {
        const method = 'get'
        const url = `${SERVERS_MAIN.remote}/appBrowser/globalVars.json`
        const options = { headers: { ...headers } }
        const res = await axios[method](url, {}, options)
        const globalVar = res?.data

        console.info('lessPluginLoadJson [21]', {
          globalVar,
          theme: globalVar?.theme,
        })
        return globalVar?.theme
      } catch (error) {
        console.info('lessPluginLoadJson [24]', { msg: error.message })
      }
    })
  },
}

// function($key) { var request = new XMLHttpRequest(); request.open("GET", "@{json_file}", false); request.send(null); var my_json = JSON.parse(request.responseText); return my_json[$key]; }
