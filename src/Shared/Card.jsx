import React from "react";
import "../page/card.css";
import DeleteModal from "../Components/modal/deleteModal";
import EditModal from "../Components/modal/EditModal";

function Card({
  deleteTodo,
  searchValueArray = [],
  cardHeading,
  cardParagraph,
  todos,
  openEditModal,
  updateTodotoCompleted,
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id, setId] = React.useState("");

  let filteredValues = searchValueArray.length > 0 ? searchValueArray : todos;

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {filteredValues.map((item, i) => {
        if (item.status) {
          return (
            <div className="cardContainer" key={item.id}>
              <div className="card-sub-container">
                <input
                  type="checkbox"
                  id="checkbox"
                  onClick={() => updateTodotoCompleted(item.id)}
                />
                <div className="card-contents">
                  <div className="inner-card">
                    <div className="card-contents-top">
                      <p>{item.title}</p>
                    </div>
                    <div className="card-contents-bottom">
                      <p>{item.description}</p>
                    </div>
                    <p>{item.duedate}</p>
                  </div>
                  <div className="card-icons">
                    <img
                      src="edit-icon.svg"
                      alt="Edit"
                      style={{ cursor: "pointer" }}
                      onClick={() => openEditModal(item)}
                    />
                    <img
                      src="delete.svg"
                      alt=""
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        openModal();
                        setId(item.id);
                      }}
                    />
                    {modalIsOpen && (
                      <DeleteModal
                        deleteTodo={deleteTodo}
                        id={id}
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                        openModal={openModal}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default Card;
