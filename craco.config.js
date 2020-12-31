const CracoLessPlugin = require('craco-less')
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias:{
      "@":pathResolve("src"),
      "@component":pathResolve("src/component"),
      "@views":pathResolve("src/views"),
      "@router":pathResolve("src/router"),
      "@utils":pathResolve("src/utils"),
      "@netWork":pathResolve("src/netWork")
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
      	// 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  devServer: {
    port: 8080,
    proxy: {
      "api": {
        target: "http://localhost:3000/",
        pathRewrite: {"^/api" : ""},
        changeOrigin: true,
        secure: false,
        xfwd: false,
      }
    }
  }
}

