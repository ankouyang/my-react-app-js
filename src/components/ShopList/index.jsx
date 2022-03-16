 import React, { Component } from 'react';
 
const product = {
    id:1,
    name:' Sony 65寸高清液晶电视',
    price:4000,
    stock:20
}

let count = 0 

 class ShopList extends Component {
     state = {  } 
     // 可在构造器里面 super(props)
     constructor(props){
         super(props)
     }

    //  方法函数需要定义在class这个类当中
    manageCount(){
        return  count + '个'
    }

     render() {
        const {dataList} = this.props
         return (
            <div style={{width:'100%',paddingLeft:'30px'}}>
            <div className='row mb-3'>
                <div className='col-6 themed-grid-col'>{dataList.name}</div>
                <div className='col-1 themed-grid-col'>￥{dataList.price}</div>
                <div className={`col-2 themed-grid-col${count?'':'-s'}`}>{this.manageCount()}</div>
            </div>
            </div>
         )
     }
 }
  
 export default ShopList;