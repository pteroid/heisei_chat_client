import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Keitai from './views/Keitai'
import Mail from './views/Mail'
import Inbox from './views/Inbox'
import ReceivedMails from './views/ReceivedMails'
import Pokebell from "./views/Pokebell";
import Send from "./views/Send"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/keitai',
            component: Keitai,
            children: [
                {
                    path: 'mail',
                    name: 'mail',
                    component: Mail
                },
                {
                    path: 'inbox',
                    name: 'inbox',
                    component: Inbox
                },
                {
                    path: 'inbox/received',
                    name: 'received',
                    component: ReceivedMails
                },
            ]
        },
        {
            path: '/pokebell',
            name: 'pokebell',
            component: Pokebell
        },
        {
            path: '/send',
            name: 'send',
            component: Send
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
