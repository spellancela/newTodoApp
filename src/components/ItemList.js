import React , {useState, useEffect}from "react";
import classes from './ItemList.module.css'
import store from "../data/store";

//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const ItemList = ({todo, deleteTodo}) => {

   const deleteHandler = (id) => {
    console.log('delete', id);
     deleteTodo(id);
   }

   return (  
     
    //this should be map of get all the list
    
      <div className={classes.container}>
          <ul >
            {todo.map((todos, id) => 
            <li  key={todos.id}> 
                <div className="ui checkbox" style={{margin: `10px`, padding:`2px`}}>
                    <input type="checkbox"/> 
                    <label> {todos.item}</label> 
                    
                </div>
               
              <button className="ui button" type="submit"
                 onClick={e => deleteHandler(todos.id)} > 
                 <i className="delete icon"/> Delete
              </button> 
              
            </li> 
         )}
              
          </ul> 
      </div>
      
  ); 
    
   
}

export default ItemList;