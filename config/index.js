const path = require('path')
const proxyTable = require('./proxy.conf')
const pm2Config = require('./pm2.conf')
const srcPath = path.resolve('src')
const distPath = path.resolve(`dist/${pm2Config.name}`)

module.exports = {
  build: {
    index: path.resolve(distPath, 'index.html'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    name: pm2Config.name,
    includeModules: true,
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    port: 2333,
    noInfo: true,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    autoOpenBrowser: true,
    registerApi: true,
    hotApiRegex: /[\/\\](route|util|middleware|controller)[\/\\]/,
    proxyTable: proxyTable,
    cssSourceMap: false
  },
  paths: {
    output: distPath,
    bin: path.resolve(srcPath, 'bin'),
    client: path.resolve(srcPath, 'client'),
    server: path.resolve(srcPath, 'server'),
    static: path.resolve(srcPath, 'static'),
    modules: path.resolve('node_modules')
  },
  dists: {
    client: path.resolve(distPath, 'client'),
    server: path.resolve(distPath, 'server'),
    modules: path.resolve(distPath, 'server/node_modules')
  },
  env: {
    development: require('./dev.env'),
    testing: require('./test.env'),
    production: require('./prod.env')
  },
  pm2: {
    apps: [pm2Config]
  }
}
