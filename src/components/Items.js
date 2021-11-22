import React, {useState, useEffect} from 'react'
import Form from './Form'
import ItemList from './ItemList'
import store from '../data/store'; 
import { uuid } from 'uuidv4';


export default function Items(props) {
    
    
    const [todo, setTodo] = useState([]);
    const [isComplete, setComplete] = useState(false)

    
    const addTodoHandler = async items => {
      console.log('this is', items);
      const request = {
            ...items,
            isComplete: false
        };
        console.log('this is request', request);
       
        const response = await store.post("/todo", request);
        setTodo([...todo, response.data]);  
        console.log(response.data); }
    

    useEffect(() => {
      const getAllList = async () => {
        const allTodoList = await todoListItem();
        if (allTodoList) 
         setTodo(allTodoList);
      };
      
      getAllList();
      
   
    }, []);

        
    const todoListItem = async () => {
        const response = await store.get("/todo");
        console.log(response.data);
        return response.data;
    };


    const deleteTodoPost = async id => {
        store.delete(`/todo/${id}`);
        const newTodoList = todo.filter((item) => {
        return item.id !==id;
        });
        
        setTodo(newTodoList);
        console.log('delete', id);
    };


    return (
        <div>
            <Form addTodoHandler={addTodoHandler}/>
            <ItemList todo={todo} {...props} deleteTodo={deleteTodoPost} />  
            
        </div>  
    )
}
