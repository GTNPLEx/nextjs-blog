'use client'


import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="Card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
