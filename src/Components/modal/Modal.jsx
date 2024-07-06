import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalList({
  setIsOpen,
  modalIsOpen,
  todos,
  setTodoData,  
  todoData,
  addTodo,
}) {
  let subtitle;

  const [value, setValue] = useState(new Date());
  const [calendar, setCalendar] = useState(false);



  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleDateChange(date) {
    console.log(date);
    setValue(date);
    setTodoData({ ...todoData, date: date.toLocaleDateString() });
    setCalendar(false); 
    console.log(todoData);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="mb-3" style={{ width: 550 }}>
          <label htmlFor="title" className="form-label">
            Title*
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(event) => {
              setTodoData({ ...todoData, title: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description*
          </label>
          <textarea
            className="form-control"
            id="description"
            onChange={(event) => {
              setTodoData({ ...todoData, description: event.target.value });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date*
          </label>
          {calendar && <Calendar onChange={handleDateChange} value={value} />}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="calendar.svg"
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => {
                setCalendar(true);
              }}
            />
            <input
              type="text"
              className="form-control"
              id="dueDate"
              value={todoData.date}
              readOnly
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="button"
            className="btn btn-light"
            onClick={closeModal}
            style={{ marginRight: 5 }}
          >
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={addTodo}>
            Add Task
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalList;
