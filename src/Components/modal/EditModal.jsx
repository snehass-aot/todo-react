import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import '../modal/Modal.css';
import xBtn from './x.svg';

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

function EditModal({ isOpen, todo, setIsOpen, updateTodo }) {
  const [editedTodo, setEditedTodo] = useState(todo);

  useEffect(() => {
    setEditedTodo(todo);
  }, [todo]);

  const handleSave = () => {
    updateTodo(editedTodo);
  };

  return (
    <div>
      <Modal className="edit" isOpen={isOpen} onRequestClose={() => setIsOpen(false)} >
        <div className="editHead">
          <h2>Edit Task</h2>
          <img src={xBtn} alt="close" onClick={() => setIsOpen(false)} />
        </div>
        <div className="editTitle">
          <h2>Title*</h2>
          <input
            type="text"
            value={editedTodo.title}
            onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
            placeholder="Finance Dashboard Design"
          />
        </div>

        <textarea
          value={editedTodo.description}
          onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Modal>
    </div>



  );
}

export default EditModal;
