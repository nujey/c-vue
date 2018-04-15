// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import router from './router'
// import axios from 'axios'

import './components'
import './plugins'
import './assets/css/index.styl'

Vue.config.productionTip = false

// const server = require('express')()
// const render = require('vue-server-renderer').createRenderer()
// import server from 'express'
// server.get('*', (req, res) => {
//   const app = new Vue({
//     data: {
//       url: req.url
//     },
//     template: `<div>访问的 URL 是： {{ url }}</div>`
//   })
//   renderer.renderToString(app, (err, html) => {
//     if (err) {
//       res.status(500).end('Internal Server Error')
//       return
//     }
//     res.end(`
//       <!DOCTYPE html>
//       <html lang="en">
//         <head><title>Hello</title></head>
//         <body>${html}</body>
//       </html>
//     `)
//   })
// })
// server.listen(8080)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
