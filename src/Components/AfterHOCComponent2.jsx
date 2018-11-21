import React from 'react';
import Component2 from './Component2';
import HOC from './HOC';

const Component22throughHOC=HOC(Component2,{ name: "shakti singh", age : "21"})

const Component2throughHOC=()=>{
    return (    
        <Component22throughHOC />
    )
}
export default Component2throughHOC;