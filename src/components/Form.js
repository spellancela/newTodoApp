import React , {useState, useRef} from 'react'
import classes from './Form.module.css'

import store from '../data/store';

export default function Form({addTodoHandler, todo}) {

    let item = useRef();


    if(item === "") {
        console.log('no data');
    }
  
    const addTodo = (e) => {
        e.preventDefault();

        const value = { item: item.current.value}

        if(value === ""){
            alert("you have to add your todo first");
            return
        } else {
          addTodoHandler(value);  
          } 

    }
    return (
        <div >
            <div className={classes.header}>    
                <h2>Add your to do here: </h2>
            </div>  

            <div className={classes.table}>
                <form  onSubmit={addTodo}>
                    <div>
                      <input
                        className={classes.todo_input}
                        type="text"
                        name="item"
                        placeholder="enter todo here"
                        ref={item}
                        value={todo}
                        required
                        />        
                  
                    </div>
                     <button className={classes.todo_button} type="submit" >   Submit  </button>
                </form>
            </div>
        </div>
    )
}
