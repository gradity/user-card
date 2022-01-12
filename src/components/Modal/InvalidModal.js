import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const InvalidModal = ({ show, errorMessage, onCloseModal }) => {
  const closeModalHandler = () => onCloseModal();

  return (
    <Modal show={show} backdrop="static">
      <Modal.Header>
        <Modal.Title>Invalid!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeModalHandler}>
          Got it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvalidModal;
