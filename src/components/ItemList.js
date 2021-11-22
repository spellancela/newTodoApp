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
    
      <div className="ui form">
          <ul className="field" >
            {todo.map((todos, id) => 
            <li  key={todos.id} className={classes.todo_li}> 
                <div className="ui checkbox" >
                    <input type="checkbox"/> 
                    <label> {todos.item}</label> 
                    
                </div>
               
              <button className={classes.delete_btn}type="submit"
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