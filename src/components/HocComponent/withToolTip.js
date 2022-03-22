import React from 'react';

// 高阶组件定义
const WithToolTips = (Component) => { // 形参接收一个组件
   // 定义一个的新组件类
    class HOC extends React.Component {
        state = { 
            showToolTip:false,
            content:''
         }
        
        handleOver = (e)=>{this.setState({ showToolTip: true,content:e.target.innerText});}
        handleOut = ()=>{this.setState({ showToolTip: false,content:''});}
        render() {
           console.log(this.props)
           //  this.props 是最外层调用高阶组件的props 这里也需要暴露出去，使用结构
            return (
                <div onMouseOver={this.handleOver} onMouseOut = {this.handleOut}>
                    <Component  action = {this.state} {...this.props}/>
                </div>
            );
        }
    } 
     

    return  HOC
}
 
export default WithToolTips;