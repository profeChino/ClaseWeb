import React, { useState } from 'react'
import { TodoElement } from './TodoElement';
import {TodoAdder} from './TodoAdder'

const TodoLIST = [
    {
      'done': false,
      'description': "Hacer la tarea",
      'owner': "Francisco Castañeda"
    },{
      'done': false,
      'description': "Lavar la Ropa",
      'owner': "Francisco Castañeda"
    }
]


export const TodoApp = () => {

  // if(true){ nunca deben haber Hooks condicionales
  //   const [first, setFirst] = useState(0);
  // }

  const [Todos, setTodos] = useState(TodoLIST);


  const addTodo = (newTodo) => {
    setTodos([...Todos,newTodo]);
  }


  return (
    <>
      <h1>TodoApp</h1>
      {/* <button onClick={addTodo}> Añadir</button> */}
      <hr />
      {
        Todos.map( ( {description,owner},index ) => {
            return(<TodoElement 
                      done={false} 
                      owner={owner} 
                      id={index} 
                      key={index} 
                      description={description} 
                      onCheck={(cTodo) => HandleCheckedTodo(cTodo)}
                      />)
        })
      }
      
      <TodoAdder 
        // setTodos={ setTodos } //pasando evento de useState
        onAddedTodo = { (newTodo) => addTodo(newTodo) } //emitiendo evento
        // onAddedTodo = { (event) => addTodo(event) } //lo mismo
        // onAddedTodo = {  addTodo } //lo mismo pero mas barato
      />
    </>
  )
}
