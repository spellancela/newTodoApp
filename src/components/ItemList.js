import React , {useState, useEffect}from "react";
import classes from './ItemList.module.css'
import store from "../data/store";

//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const ItemList = () => {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    const getAllList = async () => {
      const allContacts = await todoListItem();
      if (allContacts) 
       setTodo(allContacts);
    };
    getAllList();
    
 
  }, []);

  const todoListItem = async () => {
    const response = await store.get("/todo");
    console.log(response.data);
    return response.data;
  };


  const deleteUserPost = async id => {
     store.delete(`/todo/${id}`);
     const newTodoList = todo.filter((item) => {
       return item.id !==id;
     });
    
    setTodo(newTodoList);
    console.log('delete', id);
  };


  const addTodoHandler = (e) =>{
     console.log(e);
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
                onClick={e => deleteUserPost(todos.id)}  > 
                 <i className="delete icon"/> Delete
              </button> 
              
            </li> 
         )}
              
          </ul> 
      </div>
      
  ); 
    
   
}

export default ItemList;