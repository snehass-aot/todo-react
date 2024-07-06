import React from 'react';
import Button from '../../Shared/Button';
import ModalList from '../modal/Modal';

function NavBar({setTodos,todos,addBtn,addTodo,setTodoData,todoData,modalIsOpen,setIsOpen}) {
  
  const openModal=()=> {
    console.log("modal trigger");
    setIsOpen(true);
  }
  return (
    <div className='NavBar'>
      <p className='NavTitle'>My Task</p>
      <Button btnClass={"addBtn"} btnText={'Add New Tasks'} style={{marginLeft:"1000px"}} onClick = {openModal}/>
      <ModalList todoData={todoData} setTodoData={setTodoData} addTodo={addTodo} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setTodos={setTodos} todos={todos}/>
    </div>
  )
}

export default NavBar
