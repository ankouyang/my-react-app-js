import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import AppHead from './components/AppHead'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

class LayOut extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <AppHead />
            <SideMenu />
            <AppMain />
            <AppFooter />
            </>
        );
    }
}

export default LayOut ;