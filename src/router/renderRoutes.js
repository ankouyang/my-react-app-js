import React,{Suspense} from "react";
// 注意 react-router-dom  6.x 版本以上的  不再使用Switch 
import { Route, Switch, Redirect  } from "react-router-dom";

//const auth = window.user.data
const renderRoutes = (routes, switchProps = {}) => {
  let routers = []
//   routes.forEach( (route, i)  => {
//     if(route.permission.indexOf(auth) >= 0){
//          //这个route 路由里面 component   
//       const   Component = route.component
//       routers.push(
//         <Route
//           key={route.key || i}
//           path={route.path}
//           exact={route.exact}
//           strict={route.strict}
//           render={(props) => (
//             <Component {...props} {...route.extraProps} route={route} />
//           )}
//         />
//       )
//     }else{
//       routers.push(
//         <Redirect key={route.key || i} from={route.path} to="/login" />
//       )
//     }
//   });

// 先暂时去除权限
routes.forEach( (route, i)  => {
 const   Component = route.component
      routers.push(
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => (
            <Component {...props} {...route.extraProps} route={route} />
          )}
        />
     )
    })
  return (
    // 这个类似vue当中的router-view 占位符号一样 
    <Suspense fallback={<div></div>}>
     <Switch {...switchProps}>
      {routers}
      <Redirect to='not-found'></Redirect>  
    </Switch>
    </Suspense>
    
  );
};

export default renderRoutes;

