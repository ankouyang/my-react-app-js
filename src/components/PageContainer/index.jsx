import React from 'react';
import './PageContainer.scss'

// 无状态组件
const PageContainer = ({slot}) => {
    console.log('PageContainer rendering')
    return ( 
        <div className='page-container'>
        {slot}
    </div>
     );
}
 
export default PageContainer;

