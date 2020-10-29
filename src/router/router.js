import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入组件
const home = () => import('../components/home.vue')
const main = () => import('../components/main.vue')
const other = () => import('../components/other.vue')
const search = () => import('../components/search.vue')
const second = () => import('../components/second_main.vue')
const details = () => import('../components/details.vue')
const members = () => import('../components/members.vue')

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
        },
        {
            path: '/other',
            component: other,
            name: 'other',
            meta: {
                level: 2
            }
        },
        {
            path: '/:id/:name',
            component: second,
            name: 'second',
            meta: {
                level: 3
            }
        },
        {
            path: '/search/:from/:id',
            component: search,
            name: 'search'
        },
        {
            path: '/next/:id/:name',
            component: main,
            name: 'next',
            meta: {
                level: 4
            }
        },
        {
            path: '/details/:id/:name',
            component: details,
            name: 'details',
            meta: {
                level: 5
            }
        },
        {
            path: '/members/:id/:name',
            component: members,
            name: 'members',
            meta: {
                level: 6
            }
        }
    ]
})

export default router