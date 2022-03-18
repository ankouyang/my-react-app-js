 import React, { Component } from 'react';
 import styles from './ShopList.module.scss'
 import classNames from 'classnames/bind'

const cls = classNames.bind(styles)
const product = {
    id:1,
    name:' Sony 65寸高清液晶电视',
    price:4000,
    stock:20
}
 class ShopList extends Component {
     // 可在构造器里面 super(props)
     constructor(props){
         super(props)
         // this.handleDecrease = this.handleDecrease.bind(this)
         // 初始化state,也是定义state
         this.state = {
             count:0
         }
     }

    //  方法函数需要定义在class这个类当中
    manageCount(){
        return   this.state.count + '个'
    } 
    doSomethingWithCount(){
        if( this.state.count<0) this.setState({count:0})
    }
    
    handleDecrease=()=>{
       this.setState({count:this.state.count-1}) 
       this.doSomethingWithCount()
    }
    handleIncrease=(e,name)=>{
        console.log(e)
        console.log(name)
        console.log('step 1',this.state.count)
        this.setState({count:this.state.count+1},()=>{
            console.log('step 3',this.state.count)     
        }) 
        console.log('step 2',this.state.count)
     }

     deleteData=()=>{
      // 子组件向父组件传递数据
    }

     render() {
        const {dataList,onDelete} = this.props
         return (
            <div className={cls('shop-list')}>
            <div className='row mb-3'>
                <div className='col-6 themed-grid-col'>{dataList.name}</div>
                <div className='col-1 themed-grid-col text-center'>￥{dataList.price}</div>
                <div className={`col-2 themed-grid-col${ this.state.count?'':'-s'} text-center`}>
                    {/* 1.在jsx中使用bind */}
                    {/* <button onClick={this.handleDecrease.bind(this)} type='button' className='btn btn-primary'>-</button> */}

                    {/* 2.在构造函数中使用bind */}
                    {/* <button onClick={this.handleDecrease} type='button' className='btn btn-primary'>-</button> */}
                    {/* 3.箭头函数,最常用的 */}
                    <button onClick={this.handleDecrease} type='button' className='btn btn-primary'>-</button>
                     <span className={cls('digital')}>{ this.state.count} </span>
                    <button  onClick={(e)=>{
                       this.handleIncrease(e,dataList.name)
                    }} type='button' className='btn btn-primary'>+</button>
                </div>
                <div className='col-1 themed-grid-col text-center'>
                    <button className='btn  btn-danger btn-sm' type='button' onClick={()=>{
                      onDelete(dataList.id)
                    }}> 删除</button>
                </div>
            </div>
            </div>
         )
     }
 }
  
 export default ShopList;