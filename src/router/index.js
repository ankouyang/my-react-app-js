import React,{lazy} from 'react';

const NotFound =lazy(() => import(/* webpackChunkName: "NotFound" */ "@pages/error/notfound.jsx"));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ "@pages/login"));
const Layout = lazy(() => import(/* webpackChunkName: "Layout" */ "@pages/layout"));
const View404 = lazy(() => import(/* webpackChunkName: "View404" */ "@pages/error/404.jsx"));
const View500 = lazy(() => import(/* webpackChunkName: "View500" */ "@pages/error/500.jsx"));

//常用的路由
const constantRoutes = [
      {
        path: "/login",
        component: Login,
        permission: [1,2,3]
      },
      {
        path: "/404",
        component: View404,
        permission: [2,3]
      },
      {
          path:"/500",
          exact: true,
          component: View500,
          permission: [1,2,3]
      },
      {
        path:"/not-found",
        component: NotFound,
        permission: [1,2,3]
      }
   
]

// 异步路由
const asyncRoutes = [
    {
        path: "/",
        exact: true,
        component: Layout,
        permission: [1,2,3]
    }
]


/* 第一层路由 */
const routes = [
    ...asyncRoutes,
    ...constantRoutes,
  ];
  export  {routes}