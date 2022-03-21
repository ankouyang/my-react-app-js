 import React from 'react';
 import styles from './ShopList.module.scss'
 import classNames from 'classnames/bind'

const cls = classNames.bind(styles)

const  ShopList = ({data,onDelete,onHandleDecrease,onHandleIncrease}) => {
    console.log('ShopList rendering')
    return (
        <div className={cls('shop-list')}>
            <div className='row mb-3'>
                <div className='col-3 themed-grid-col'>{data.name}</div>
                <div className='col-1 themed-grid-col text-center'>￥{data.price}</div>
                <div className={`col-2 themed-grid-col${ data.count?'':'-s'} text-center`}>
                    {/* 1.在jsx中使用bind */}
                    {/* <button onClick={this.handleDecrease.bind(this)} type='button' className='btn btn-primary'>-</button> */}

                    {/* 2.在构造函数中使用bind */}
                    {/* <button onClick={this.handleDecrease} type='button' className='btn btn-primary'>-</button> */}
                    {/* 3.箭头函数,最常用的 */}
                    <button onClick={()=>{
                       onHandleDecrease(data.id)
                    }} type='button' className='btn btn-primary'>-</button>
                     <span className={cls('digital')}>{ data.count} </span>
                    <button  onClick={()=>{
                       onHandleIncrease(data.id)
                    }} type='button' className='btn btn-primary'>+</button>
                </div>
                <div className='col-1 themed-grid-col'>￥{data.price*data.count}</div>
                <div className='col-1 themed-grid-col text-center'>
                    <button className='btn  btn-danger btn-sm' type='button' onClick={()=>{
                      onDelete(data.id)
                    }}> 删除</button>
                </div>
            </div>
            </div>
      );
}
 
export default  ShopList;



//  class ShopList extends PureComponent {
//      // 可在构造器里面 super(props)
//      constructor(props){
//          super(props)
//          // this.handleDecrease = this.handleDecrease.bind(this)
//          // 初始化state,也是定义state
//         //  this.state = {
//         //      count:0
//         //  }
//      }

//     //  方法函数需要定义在class这个类当中
//     // manageCount(){
//     //     return   this.state.count + '个'
//     // } 
//     // doSomethingWithCount(){
//     //     if( this.state.count<0) this.setState({count:0})
//     // }
    
//     // handleDecrease=()=>{
//     //    this.setState({count:this.state.count-1},()=>{
//     //     this.doSomethingWithCount()
//     //    }) 
//     // }
//     // handleIncrease=(e,name)=>{
//     //     // console.log(e)
//     //     // console.log(name)
//     //     // console.log('step 1',this.state.count)
//     //     this.setState({count:this.state.count+1},()=>{
//     //         console.log('step 3',this.state.count)     
//     //     }) 
//     //     // console.log('step 2',this.state.count)
//     //  }
    
//      // 1.阻止子组件虚拟Dom渲染，两种方式 1.shouldComponentUpdate方法  React组件暴露的方法,两个形参,nextProps,nextState  2.使用第三方包PureComponent
//     //  shouldComponentUpdate(nextProps,nextState){
//     //     //  console.log('props',this.props,nextProps)
//     //     //  console.log('props',this.state,nextState)
//     //     // return  true or false  
//     //     if(this.state.count === nextState.count)  return false // 当某个state的值没有发生改变的时候，阻止虚拟Dom的渲染，减少不必要的开销
//     //     return true        
//     //  }

//      render() {
//         console.log('每次都渲染')
//         const {data,onDelete,onHandleDecrease,onHandleIncrease} = this.props
//          return (
//             <div className={cls('shop-list')}>
//             <div className='row mb-3'>
//                 <div className='col-3 themed-grid-col'>{data.name}</div>
//                 <div className='col-1 themed-grid-col text-center'>￥{data.price}</div>
//                 <div className={`col-2 themed-grid-col${ data.count?'':'-s'} text-center`}>
//                     {/* 1.在jsx中使用bind */}
//                     {/* <button onClick={this.handleDecrease.bind(this)} type='button' className='btn btn-primary'>-</button> */}

//                     {/* 2.在构造函数中使用bind */}
//                     {/* <button onClick={this.handleDecrease} type='button' className='btn btn-primary'>-</button> */}
//                     {/* 3.箭头函数,最常用的 */}
//                     <button onClick={()=>{
//                        onHandleDecrease(data.id)
//                     }} type='button' className='btn btn-primary'>-</button>
//                      <span className={cls('digital')}>{ data.count} </span>
//                     <button  onClick={()=>{
//                        onHandleIncrease(data.id)
//                     }} type='button' className='btn btn-primary'>+</button>
//                 </div>
//                 <div className='col-1 themed-grid-col'>￥{data.price*data.count}</div>
//                 <div className='col-1 themed-grid-col text-center'>
//                     <button className='btn  btn-danger btn-sm' type='button' onClick={()=>{
//                       onDelete(data.id)
//                     }}> 删除</button>
//                 </div>
//             </div>
//             </div>
//          )
//      }
//  }
  
//  export default ShopList;