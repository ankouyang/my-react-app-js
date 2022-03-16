import React, { Component } from 'react';
import ShopList from '@/components/ShopList';
// import FunctionShopList from '@/components/FunctionShopList';
import PageContainer from '@/components/PageContainer';
import './AppMain.scss'
const dataList = [
    {
        id:1,
        name:' Sony 65寸高清液晶电视',
        price:4000,
        stock:20
    },
    {
        id:2,
        name:' Sony2 68寸高清液晶电视',
        price:6000,
        stock:20
    },
    {
        id:3,
        name:' Sony3 70寸高清液晶电视',
        price:6000,
        stock:20
    },
    {
        id:4,
        name:' Sony 65寸高清液晶电视',
        price:4000,
        stock:20
    },
    {
        id:5,
        name:' Sony2 68寸高清液晶电视',
        price:6000,
        stock:20
    },
    {
        id:6,
        name:' Sony3 70寸高清液晶电视',
        price:8000,
        stock:20
    }
]
class AppMain extends Component {
    state = {  } 
    // renderList  条件判断返回的dom节点渲染
     renderList(){
        //  if(!dataList.length){
        //     return  (
        //         <div className='text-center'>
        //           商品列表为空
        //         </div>
        //     )
        //  }
         
         return  (
            <PageContainer
             slot={
                 <>
                 {
                    dataList.map(item=>{
                        return   <ShopList dataList={item} key={item.id} />
                  })
                 }
                 </>
              } 
             />  
        )
         
     }
    render() { 
        return (
            <div className='app-main'> 
                <p>页签</p>
                {dataList.length === 0&&( <div className='text-center'>商品列表为空</div>)}
                {this.renderList()}
            </div>
        );
    }
}
 
export default AppMain;