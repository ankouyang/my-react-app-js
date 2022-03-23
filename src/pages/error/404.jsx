import React from 'react';
import img404 from '@assets/images/404.jpg'
// 展示类别的 都可以使用无状态组件
const View404 = () => {
    return ( 
        <div style={{textAlign: 'center', marginTop: '20px'}} >
            <img src={img404} alt="404" />
        </div>
     );
}
 
export default View404;
