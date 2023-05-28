'use client'

import React from 'react';

const Modal = (props) => {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <div className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </div>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
