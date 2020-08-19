import Vue from 'vue'
import Router from 'vue-router'
import Miste from '../pages/Miste/Miste.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
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
                    redirect:'/goods'
                },
            ]
        },
        {
            path:'/',
            redirect:"/miste"
        }
    ]
})