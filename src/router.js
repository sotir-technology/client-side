import {CFG} from './ServerKeys';
import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import VueCookie from 'vue-cookie';

Vue.use(Router);

//Start imports
import Login from './views/Login'; //login screen
const Logout = {template: '<p>Logging out, please wait...</p>'}; //login out model
import ForgotPw from './views/ForgotPw';
import Dashboard from './views/Dashboard'; //dashboard screen

const router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: 'dashboard',
            component: DashboardLayout,
            children: [
                {
                    meta: {auth: true},
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
            ]
        },
        //Login routers
        {
            path: '/',
            redirect: 'login',
            component: AuthLayout,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: Login,
                    beforeEnter: (req, res, next) => {
                        //next to dashboard
                        if (CHK_LGN) {
                            next({name: 'dashboard'})
                        }
                        next();
                    }
                },
                {
                    path: '/logout',
                    name: 'logout',
                    component: Logout,
                    beforeEnter: (req, res, next) => {
                        //logout all
                        VueCookie.delete(CFG.COOKIE_NAME);
                        next({name: 'login'});
                    }
                },
                {
                    path: '/forgot-pw',
                    name: 'forgot-pw',
                    component: ForgotPw
                },
            ]
        }
    ]
});
//middleware applied
router.beforeEach(function (req, res, next) {
    //you must login
    if (req.meta.auth && !CHK_LGN) {
        next({name: 'login'});
    }
    next();
});
//global login check
const CHK_LGN = VueCookie.get(CFG.COOKIE_NAME);
export default router;
