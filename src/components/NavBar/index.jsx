import React from 'react';
const NavBar = ({onHandleAoumt,onHandleReset}) => {
    console.log('NavBar rendering')
    return ( 
        <div>
        <button className='btn btn-primary' type='button' onClick={onHandleAoumt}> 减一个</button> 
        <button className='btn btn-primary' type='button' onClick={onHandleReset}> 重置</button> 
        </div>
     );
}
 
export default NavBar;
 
