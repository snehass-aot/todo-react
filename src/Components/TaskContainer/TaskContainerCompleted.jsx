import React from "react";
import Button from "../../Shared/Button";
import "../../page/card.css";

function TaskContainerCompleted({
  deleteTodo,
  searchValueArray = [],
  TaskLabel,
  updateTodotoCompleted,
  showClearButton,
  todos,
  clearAllCompleted,
  openEditModal,
}) {
  const filteredTodos = searchValueArray.length > 0 ? searchValueArray : todos.filter(todo => !todo.status);

  return (
    <>
      <div className="taskcontainer">
        <div className="completeTask">
          <p>{TaskLabel}</p>
          {showClearButton && <Button btnText="Clear Completed Tasks" onClick={clearAllCompleted} />}
        </div>
      </div>
      {filteredTodos.map((todo) => (
        <div className="cardContainer" key={todo.id}>
          <div className="card-sub-container">
            <input
              type="checkbox"
              className="boxchecked"
              checked={!todo.status}
              onChange={() => updateTodotoCompleted(todo.id)}
            />
            <div className="card-contents">
              <div className="inner-card">
                <div className="card-contents-top">
                  <p>{todo.title}</p>
                </div>
                <div className="card-contents-bottom">
                  <p>{todo.description}</p>
                </div>
                <p>{todo.duedate}</p>
              </div>
              <div className="card-icons">
                <img
                  src="edit-icon.svg"
                  alt="Edit"
                  style={{ cursor: "pointer" }}
                  onClick={() => openEditModal(todo)}
                />
                <img
                  src="delete.svg"
                  alt="Delete"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteTodo(todo.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskContainerCompleted;
