import React from 'react';
import {Link} from 'react-router-dom'

const Component2 =()=>{
    return(
        <div>
            hey I m Component2 if you want to go to Component1
            <Link to='/Component1'><button className='btn btn-success'>Click here</button></Link>
        </div>
    )
}