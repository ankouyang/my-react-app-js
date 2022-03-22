import React, { Component } from 'react';
import WithToolTips from './withToolTip';

const  ButtonHover =(props)=>{
    console.log(props)
     return (
         <div className='container'>
             <button className='btn btn-primary' type='button'> 高阶组件的方式</button>
             {props.action.showToolTip&&(
                 <span className='badge badge-pill badge-primary ml-2'>{props.action.content}</span>
             )}
         </div>
     )
}

export default WithToolTips(ButtonHover)