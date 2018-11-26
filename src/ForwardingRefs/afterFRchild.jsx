import React from 'react';

const AfterFRchild=React.forwardRef((props,myref)=>{
    
    return(
        <>  
            {/* {console.log('ref ',ref)} */}
            <input type='text' ref={myref} />
        </>    
    )
})
export default AfterFRchild;