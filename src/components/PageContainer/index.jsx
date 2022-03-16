import React, { Component } from 'react';
import './PageContainer.scss'
class PageContainer extends Component {
    state = {  } 
    render() { 
        // react 实现插槽功能 ，使用直接命名的方式
        const {slot} = this.props
        return (
            <div className='page-container'>
                {slot}
            </div>
        );
    }
}
 
export default PageContainer;