const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const home = appData.home
const ratings = appData.ratings

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    before(app) {
      app.get('/api/home', function (req, res) {
        res.json({
          errno: 0,
          data: home
        })
      }),
      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common',resolve('src/common'))
      .set('api',resolve('src/api'))
      .set('views',resolve('src/views'))
  }
}
