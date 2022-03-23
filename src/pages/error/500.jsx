import React from 'react';
import img500 from '@assets/images/500.png'
// 展示类别的 都可以使用无状态组件
const View500 = () => {
    return ( 
        <div style={{textAlign: 'center', marginTop: '20px'}} >
            <img src={img500} alt="500" />
        </div>
     );
}
 
export default View500;