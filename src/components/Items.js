import React, {useState, useEffect} from 'react'
import Form from './Form'
import ItemList from './ItemList'
import store from '../data/store'; 


export default function Items(props) {
    
    // const [items, setItems] = useState([]);

    // const addTodoHandler = async items => {
    //   console.log('this is', items);
    // //   const request = {
    // //         ...items
    // //     };
    // //     const response = await store.post("/todo", request);
    // //     setItems([...items, response.data]);  
    // //     console.log(response.data);
    // }

    
//   useEffect(() => {
  
//   }, [items]);

    return (
        <div>
            <Form/>
            {<ItemList  />  }
        </div>
    )
}
