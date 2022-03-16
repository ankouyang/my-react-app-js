import React from "react";

const manageCount =()=>{
    return   +'个'
}
// 函数组件
const FunctionShopList = (props) => {
    const {dataList} = props
    return ( 
        <div style={{width:'100%',paddingLeft:'30px'}}>
             <div className='row mb-3'>
                 <div className='col-6 themed-grid-col'>{dataList.name}-函数组件</div>
                 <div className='col-1 themed-grid-col'>￥{dataList.price}</div>
                 <div className={'col-2 themed-grid-col'}>{manageCount()}</div>
             </div>
             </div>
     );
}
 
export default FunctionShopList;