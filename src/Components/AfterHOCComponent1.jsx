import React from 'react';
import Component1 from './Component1';
import HOC from './HOC';

const Component11throughHOC=HOC(Component1,{ name: "shakti singh", address: "XYZ,New Delhi", mobile: "971718XXXX" })

const Component1throughHOC=()=>{
    return (    
        <Component11throughHOC />
    )
}
export default Component1throughHOC;