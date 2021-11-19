import React , {useState, useRef} from 'react'
import classes from './Form.module.css'

import store from '../data/store';

export default function Form(props) {

    let item = useRef();
    const [isComplete, setComplete] = useState(false)
     

  
    const addTodo = (e) => {
        e.preventDefault();
        const value = { item: item.current.value, 
           completed: isComplete };

           store.post("/todo", value).then(response => {
            console.log(response.data); 
            setComplete(false);
        });
        // this.props.addTodoHandler();
    }
    return (
        <div>
            <div className="header">    
                <label>Add your to do here: </label>
            </div>  

            <div className={classes.table}>
                <form onSubmit={addTodo}>
                    <div className="field">
                        <input
                        type="text"
                        name="item"
                        placeholder="enter todo here"
                        ref={item}
                        />        
                      <button className="ui button"  type="submit" >   Submit  </button>
                    </div>
       
                </form>
            </div>
        </div>
    )
}
