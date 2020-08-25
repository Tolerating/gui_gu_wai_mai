import Vue from 'vue'
import Router from 'vue-router'
// import Miste from '../pages/Miste/Miste.vue'
const Miste = ()=>import('../pages/Miste/Miste.vue')
const Order  = ()=>import('../pages/Order/Order.vue')
const Search = ()=>import( '../pages/Search/Search.vue')
const Profile = ()=>import( '../pages/Profile/Profile.vue')
const Login = ()=>import('../pages/Login/Login.vue')
const Shop = ()=>import('../pages/Shop/Shop.vue')
const ShopGoods  = ()=>import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopRatings = ()=>import( '../pages/Shop/ShopRatings/ShopRatings.vue')
const ShopInfo  = ()=>import('../pages/Shop/ShopInfo/ShopInfo.vue')
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/miste',
            component:Miste,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'goods',
                    component:ShopGoods
                },
                {
                    path:'ratings',
                    component:ShopRatings
                },
                {
                    path:'info',
                    component:ShopInfo
                },
                {
                    path:'',
                    redirect:'goods'
                },
            ]
        },
        {
            path:'/',
            redirect:"/miste"
        }
    ]
})