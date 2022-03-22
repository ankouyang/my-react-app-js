import React, { PureComponent } from 'react';
import Home from '@/pages/home';
import './AppMain.scss'
class  AppMain extends PureComponent {
    // renderList  条件判断返回的dom节点渲染
    render() { 
        return (
            <div className='app-main'> 
                <p>页签</p>
                <Home />    
            </div>
        );
    }
}
 
export default AppMain;