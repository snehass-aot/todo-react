import React from "react";
import Button from "../../Shared/Button";
import Card from "../../Shared/Card";
import "../../page/card.css";
function TaskContainer({
  deleteTodo,
  TaskLabel,
  updateTodotoCompleted,
  showClearButton,
  openEditModal,
  searchValueArray,
  todos,
}) {
  return (
    <div className="taskcontainer" >
        <p>{TaskLabel}</p>
      <Card
      searchValueArray={searchValueArray}
        todos={todos}
        updateTodotoCompleted={updateTodotoCompleted}
        deleteTodo={deleteTodo}
        openEditModal={openEditModal}
        cardHeading={"Hey"}
        cardParagraph={"Hello"}
      />
    </div>
  );
}

export default TaskContainer;
