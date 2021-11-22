import React , {useState, useRef} from 'react'
import classes from './Form.module.css'

import store from '../data/store';

export default function Form({addTodoHandler, todo}) {

    let item = useRef();
    
  
    const addTodo = (e) => {
        e.preventDefault();

        const value = { item: item.current.value}
          addTodoHandler(value);  
          console.log('add', value);

    }
    return (
        <div>
            <div className="header">    
                <label>Add your to do here: </label>
            </div>  

            <div className="ui field">
                <form onSubmit={addTodo}>
                    <div className="ui field">
                      <input
                        type="text"
                        name="item"
                        placeholder="enter todo here"
                        ref={item}
                        value={todo}
                        />        
                      <button className="ui button"  type="submit" >   Submit  </button>
                    </div>
       
                </form>
            </div>
        </div>
    )
}
