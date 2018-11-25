import React from 'react';

class beforeFRefs extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h2>Auto Focus</h2>
                <input type='text' ref={()=>{x && x.focus}}/>
            </React.Fragment>
        )
    }
}
export default beforeFRefs;