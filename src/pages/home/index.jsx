import React, { PureComponent } from 'react';
import ShopList from '@/components/ShopList';
import PageContainer from '@/components/PageContainer';
import NavBar from '@/components/NavBar';
import  ButtonHover from '@/components/Hoc/buttonHover'
class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
          dataList:[
            {
                id:1,
                name:' Sony 65寸高清液晶电视',
                price:4000,
                count:0
            },
            {
                id:2,
                name:' Sony2 68寸高清液晶电视',
                price:6000,
                count:0
            },
            {
                id:3,
                name:' Sony3 70寸高清液晶电视',
                price:6000,
                count:0
            },
            {
                id:4,
                name:' Sony 65寸高清液晶电视',
                price:4000,
                count:0
            },
            {
                id:5,
                name:' Sony2 68寸高清液晶电视',
                price:6000,
                count:0
            },
            {
                id:6,
                name:' Sony3 70寸高清液晶电视',
                price:8000,
                count:0
            }
        ]
        }
        console.log('APP  constructor')
     }
     componentDidMount(){
        //
        console.log('APP  mounted')
    }  
      //处理子组件传递过来的参数,并给进行相应的处理,通过在标签上自定义方法。子组件通过props 拿到父组件自定义的方法
    handleDelete =(id)=>{
        console.log(id)
        //注意这里操作数组的时候,不使用splice slice push 等等来操作数组，改变现有数组
        const listData = this.state.dataList.filter(item=>item.id !== id)
        this.setState({
            dataList:listData
        })
     }
     handleDecrease=(id)=>{
         console.log(id)
         const listData = this.state.dataList.map(item=>{
             if(item.id === id){
                  //  使用不可变数据
                 let _item =  {...item}
                 _item.count--
                 if(_item.count<0) _item.count = 0
                return _item
             }else{
                 return item
             }
         })
         this.setState(
            {
             dataList:listData
            } 
         ) 
 
     }
     handleIncrease=(id)=>{
         console.log(id)
         //  使用不可变数据
         const listData = this.state.dataList.map(item=>{
             if(item.id === id){
                  //  使用不可变数据
                 let _item =  {...item}
                 _item.count++
                return _item
             }else{
                 return item
             }
         })
         this.setState(
            {
             dataList:listData
            } 
         ) 
      }
     handleAoumt = ()=>{
         const listData =  [...this.state.dataList] 
         listData.pop()
         this.setState({
             dataList:listData
         })
     }
     handleReset = ()=>{
         const listData = this.state.dataList.map(item=>{
             let _item =  {...item}
             _item.count = 0
            return _item
         })
         this.setState(
            {
             dataList:listData
            } 
         ) 
     }
     renderList(){
        return  (
           <PageContainer
            slot={
                <>
                <NavBar  onHandleAoumt={this.handleAoumt}  onHandleReset={this.handleReset}/>
                <ButtonHover  id={2} />
                {
                    this.state.dataList.map(item=>{
                       return   <ShopList data={item} key={item.id} onHandleIncrease={this.handleIncrease} onHandleDecrease={this.handleDecrease} onDelete={this.handleDelete} />
                 })
                }

                </>
             } 
            />  
       )
        
    }

    componentDidUpdate(){
        console.log('APP  componentDidUpdate')
        return true
    }

    render() { 
        console.log('APP  render')
        return ( 
            <> 
            {this.state.dataList.length === 0&&( <div className='text-center'>商品列表为空</div>)}
            {this.renderList()}
            </>
         );
    }
    componentWillUnmount(){
        console.log('Item-Deleted')
    }

}
 
export default Home;