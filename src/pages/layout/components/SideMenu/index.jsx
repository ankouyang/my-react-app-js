import React, { Component } from 'react';
import './SideMenu.scss'
class SideMenu extends Component {
    state = {  } 
    golink =()=>{
        console.log(this.props)
      this.props.history.push('/admin/shopping/car')
    }
    render() { 
        return (
            
            <div className='side-menu' onClick = {this.golink}>我是左侧菜单</div>
        );
    }
}
 
export default SideMenu;