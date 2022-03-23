import React, { PureComponent } from 'react';
import componentsRoutes from '@router/componentsRoutes';
import renderRoutes from '@router/renderRoutes'
import './AppMain.scss'
class  AppMain extends PureComponent {
    // renderList  条件判断返回的dom节点渲染
    render() { 
        return (
            <div className='app-main'> 
                <p>页签</p>
               {renderRoutes(componentsRoutes)}
            </div>
        );
    }
}
 
export default AppMain;