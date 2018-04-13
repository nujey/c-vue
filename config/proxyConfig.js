module.exports = {
  proxyList: {
    '/api': {
      target: 'https://api.douban.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}