import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Search from "../Components/NavBar/Search/search";
import TaskContainer from "../Components/TaskContainer/TaskContainer";
import TaskContainerCompleted from "../Components/TaskContainer/TaskContainerCompleted";
import EditModal from "../Components/modal/EditModal";
import "../page/card.css";
import "../page/index.css";

function Index() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueArray, setSearchValueArray] = useState([]);
  const [todos, setTodos] = useState([]);
  const [todoData, setTodoData] = useState({});
  const [currentTodo, setCurrentTodo] = useState(null);

  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      console.log("Saving todos to localStorage:", todos);
      localStorage.setItem("todos", JSON.stringify(todos));
      setSearchValueArray(todos); // Initialize searchValueArray with todos
    }
  }, [todos]);

  const getTodoList = () => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      console.log("Retrieved todos from localStorage:", storedTodos);
      if (Array.isArray(storedTodos)) {
        setTodos(storedTodos);
        setSearchValueArray(storedTodos); // Initialize searchValueArray with storedTodos
      } else {
        setTodos([]);
        setSearchValueArray([]);
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      setTodos([]);
      setSearchValueArray([]);
    }
  };

  const addTodo = () => {
    const todo = {
      id: Date.now(),
      title: todoData.title,
      description: todoData.description,
      duedate: todoData.date,
      status: true,
    };
    setTodos([...todos, todo]);
    setTodoData({});
    setIsOpen(false);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllCompleted = () => {
    setTodos(todos.filter((todo) => todo.status));
  };

  const updateTodotoCompleted = (id) => {
    console.log("updated value", id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const openEditModal = (todo) => {
    setCurrentTodo(todo);
    setEditModalIsOpen(true);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setEditModalIsOpen(false);
  };

  return (
    <div className="container">
      <NavBar
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
        todoData={todoData}
        setTodoData={setTodoData}
      />
      <hr className="hr-line" />
      <Search setSearchValue={setSearchValue} setSearchValueArray={setSearchValueArray} todos={todos} />
      <TaskContainer
        TaskLabel="Active Tasks"
        todos={todos}
        searchValueArray={searchValueArray.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()) && todo.status)}
        deleteTodo={deleteTodo}
        updateTodotoCompleted={updateTodotoCompleted}
        openEditModal={openEditModal}
      />
      <TaskContainerCompleted
        TaskLabel="Completed Tasks"
        searchValueArray={searchValueArray.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()) && !todo.status)}
        showClearButton
        todos={todos}
        clearAllCompleted={clearAllCompleted}
        deleteTodo={deleteTodo}
        updateTodotoCompleted={updateTodotoCompleted}
        openEditModal={openEditModal}
      />
      {currentTodo && (
        <EditModal
          isOpen={editModalIsOpen}
          todo={currentTodo}
          setIsOpen={setEditModalIsOpen}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
}

export default Index;
