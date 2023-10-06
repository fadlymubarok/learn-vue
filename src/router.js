import vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import DetailPage from '@/components/DetailPage'

vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/detail',
        name: 'detail',
        component: DetailPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router