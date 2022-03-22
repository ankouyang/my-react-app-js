import React from 'react';
import './PageContainer.scss'

// 无状态组件
const PageContainer = (props) => {
    console.log('PageContainer rendering')
    return ( 
        <div className='page-container'>
            {props.children}   
        </div>
     );
}
 
export default PageContainer;

