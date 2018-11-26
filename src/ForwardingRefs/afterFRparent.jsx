import React from 'react';
import AfterFRchild from './beforeFRchild';

class AfterFRparent extends React.Component{
    
    ref=React.createRef();
    render(){
        return(
            <center>
            <h2>Auto Focus</h2>
            <AfterFRchild myref={x=>x && x.focus()}/>
            </center>
        )
    }
}
export default AfterFRparent;