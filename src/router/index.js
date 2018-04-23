import VueRouter from 'vue-router'
import routes from './routes'

// 封装一下router 返回一个实例
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedposition) {
    if (savedposition) {
      return {
        y: savedposition.y
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  document.titlt = to.query.title || to.meta.title || '会搜app'
  next()
})
export default router
