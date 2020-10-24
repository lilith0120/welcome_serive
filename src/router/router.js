import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入组件
const home = () => import('../components/home.vue')
const main = () => import('../components/main.vue')

const router = new VueRouter({
    base: '',
    routes: [
        {
            path: '/',
            component: home,
            name: 'home',
            meta: {
                level: 1
            }
        },
        {
            path: '/main',
            component: main,
            name: 'main',
            meta: {
                level: 2
            }
        }
    ]
})

export default router