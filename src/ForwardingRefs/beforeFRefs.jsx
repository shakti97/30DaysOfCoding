import React from 'react';

class beforeFRefs extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>
                    <h2>Auto Focus</h2>
                    <input type='text' ref={(x)=>{x && x.focus()}}/>
                </center>
            </React.Fragment>
        )
    }
}
export default beforeFRefs;