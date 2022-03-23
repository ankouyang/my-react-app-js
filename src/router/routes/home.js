import React,{lazy} from 'react';
const home =lazy(() => import(/* webpackChunkName: "NotFound" */ "@pages/home"));
const shopping = [
    {
        key: "home",
        path: "/admin",
        exact:true,
        component: home,   
        permission: [2,3]
      }
]
export default shopping