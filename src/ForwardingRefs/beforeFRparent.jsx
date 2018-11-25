import React from 'react';
import beforeFRchild from './beforeFRchild';

class beforeFRparent extends React.Component{
    render(){
        return(
            <center>
            <h2>Auto Focus</h2>
            <beforeFRchild ref={(x)=>{x && x.focus()}}/>
            </center>
        )
    }
}
export default beforeFRparent;