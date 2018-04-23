import VueRouter from 'vue-router'
import routes from './routes'

// 封装一下router 返回一个实例
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedposition) {
    // console.log(savedposition)
    return {
      y: savedposition
    }
  }
})
router.beforeEach((to, from, next) => {
  document.titlt = to.query.title || to.meta.title || '会搜app'
  next()
})
export default router
