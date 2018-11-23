import React from 'react';
import {NavLink} from 'react-router-dom'
// import Spinner from './loader';

const Component2 =()=>{
    return(
        <div>
            hey I m Component2 if you want to go to Component1
            <NavLink exact to='/Component1'><span className='btn btn-success'>Click here</span></NavLink>
        </div>
    )
}
export default Component2;