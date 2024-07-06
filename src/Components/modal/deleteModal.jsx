import React from 'react';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
function DeleteModal({setIsOpen,modalIsOpen,deleteTodo,id}) {
    let subtitle;




  function afterOpenModal() {
 
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <div>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
  

<div >
	
	
			<div className="modal-header flex-column" style={{width:500}}>
									
				<h4 className="modal-title w-100">Delete Task?</h4>	
			</div>
			<div className="modal-body">
				<p>Do you really want to delete these task?</p>
			</div>
			<div className="modal-footer justify-content-center">
				<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{setIsOpen(false)}}>Cancel</button>
				<button type="button" className="btn btn-danger" onClick={()=>{deleteTodo(id),setIsOpen(false)}}>Delete</button>
			</div>
	
	</div>

    </Modal></div>
    </>
  )
}

export default DeleteModal