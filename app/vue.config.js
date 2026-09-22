const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,

  // Apache の /var/www/html/fermidata/search/ に配置して
  // https://<host>/fermidata/search/ で公開する
  publicPath: '/fermidata/search/',

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },

  // ローカル開発時のみ使用 (npm run serve)。
  // 本番は npm run build の成果物を Apache が配信するので使われない。
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    client: {
      webSocketURL: 'ws://ip-163-220-177-91.compute.mdx1.jp:8080/ws',
    },
    // 本番の Apache リバースプロキシと同じパスで api に転送し、同一オリジンを再現する
    proxy: {
      '^/fermidata/search/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: { '^/fermidata/search/api': '' },
      },
    },
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
