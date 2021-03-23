/**
 * @description: Not used, experimented with changing less files directly
 */
module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('blue', function () {
      // Loader context  is available in `less.webpackLoaderContext`
      const color = '#0077cc'
      console.info('lessPlugin [3]', { color })
      return color
    })
  },
}
