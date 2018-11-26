import React from 'react';
import BeforeFRchild from './beforeFRchild';

class beforeFRparent extends React.Component{
    render(){
        return(
            <center>
            <h2>Auto Focus</h2>
            <BeforeFRchild myref={x=>x && x.focus()}/>
            </center>
        )
    }
}
export default beforeFRparent;