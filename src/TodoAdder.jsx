import React, { useState } from 'react'

const emptyTodo = {
  'done': false,
  'description': "",
  'owner': ""
};

export const TodoAdder = ({/*setTodos*/onAddedTodo}) => {

  const [ValorTodo, setValorTodo] = useState(emptyTodo);

  // const HandleInputDesc=({target}) => {
  //   let updatedTodo = {
  //     ...ValorTodo,
  //     description: target.value
  //   };
  //   setValorTodo(updatedTodo);
  // }

  // const HandleInputOwner=({target}) => {
  //   setValorTodo({...ValorTodo, owner:target.value});
  // }

  const HandleInputValue=({target},param) =>{
    setValorTodo({...ValorTodo, [param]:target.value});
  }

  const onSubmitTodo = (event) => {
    // setTodos(ValorTodo);//no podemos asi nomas porque va a sobrescribir el objeto anterior
    event.preventDefault();

    if( ValorTodo.owner.trim().length <= 1 && 
        ValorTodo.description.trim().length <= 1) return;

    // setTodos( (previoustodos) => [...previoustodos, ValorTodo] );//mejor con callback, previousTodos son los del TodoApp
    onAddedTodo(ValorTodo); //emitiendo el Evento
    setValorTodo(emptyTodo);
  }

  return (
    <form onSubmit={onSubmitTodo}>      
      <fieldset>
        <legend>New To-do</legend>
        Descripcion:<input type="text" value={ValorTodo.description} 
        onChange={ (event) => { HandleInputValue(event,'description') } }/>      
        <br />
        Propietario:<input type="text" value={ValorTodo.owner} 
        onChange={ (event) => { HandleInputValue(event,'owner') } } />
        <br />
        <button type="submit"> Añadir </button>
        </fieldset>
    </form>
  )
}
