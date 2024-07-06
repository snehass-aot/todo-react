import React from "react";

function Sort({ setSearchValueArray, todos }) {
  const filterTask = (value) => {
    let sortedTodos;
    if (value === "newest") {
      sortedTodos = [...todos].sort((a, b) => new Date(b.duedate) - new Date(a.duedate));
    } else if (value === "oldest") {
      sortedTodos = [...todos].sort((a, b) => new Date(a.duedate) - new Date(b.duedate));
    }
    setSearchValueArray(sortedTodos);
  };

  return (
    <div className="sortField">
      <div className="form-inline col-md-6 justify-content-end" id="sort">
        <label htmlFor="sortTasks" className="mr-2">
          Sort by:
        </label>
        <select
          className="form-control"
          id="sortTasks"
          onChange={(event) => filterTask(event.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
