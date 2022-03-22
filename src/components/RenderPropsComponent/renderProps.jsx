import React, { Component } from 'react';
import WithTooltip from './withToolTip'

const RenderProps = ( props ) => {
  return ( 
      <div className='container'>
        <WithTooltip>
        {({ showToolTip, content}) => (
          <div>
          <button className="btn btn-primary" type="btn"> 函数作为子组件 props </button>
          {showToolTip && (
            <span className="badge badge-pill badge-primary ml-2">
              {content}
            </span>
          )}
          </div>
        )}
        </WithTooltip>
      </div>
   );
}
 
export default RenderProps;