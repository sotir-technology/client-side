import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import store from "./store";
Vue.use(Router);

//Start imports
import Login from './views/Login';
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
          component: Login
        },
      ]
    }
  ]
});
//middleware applied
router.beforeEach(function (req, res, next) {
  //you must login
  if(req.meta.auth && !store.getters.isLogin){
    next({name: 'login'});
  }
  next();
});

export default router;
