import React from "react";

import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';
  
const Button =()=>{
    return (
     <Router>   
       <div className="ui inverted button">
         <Link to={'/'}>  <button className="ui inverted yellow button">Active</button> </Link> 
         <Link to={'/ItemList'}>  <button className="ui inverted primary button">All</button>  </Link> 
         <Link to={'/Completed'} > <button className="ui inverted red button">Completed</button> </Link>
       </div>

    </Router>
    )
}

export default Button;