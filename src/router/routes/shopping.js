import React,{lazy} from 'react';
const shoppingCar =lazy(() => import(/* webpackChunkName: "NotFound" */ "@pages/shopping/car"));
const shoppingList =lazy(() => import(/* webpackChunkName: "NotFound" */ "@pages/shopping/list"));
const  shopping = [
    {
        key: "car",
        path: "/admin/shopping/car",
        exact:true,
        component: shoppingCar,
        permission: [2,3]
      },
      {
        key: "list",
        path: "/admin/shopping/list",
        component: shoppingList,
        exact:true,
        permission: [2,3]
      },
]
export default shopping