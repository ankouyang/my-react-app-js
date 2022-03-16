import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import AppHead from './components/AppHead'
import AppMain from './components/AppMain'
import './layout.scss'

class LayOut extends Component {
    state = {  } 
    render() { 
        return (
            <div className='layout'>
                <AppHead />
                <div className='layout__container'>
                <SideMenu />
                <AppMain/>
                </div>
            </div>
        );
    }
}

export default LayOut ;