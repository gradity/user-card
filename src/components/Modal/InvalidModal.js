import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const InvalidModal = ({ isInvalid }) => {
  const [show, setShow] = useState(isInvalid);

  return (
    <Modal show={show} backdrop="static">
      <Modal.Header>
        <Modal.Title>Invalid input</Modal.Title>
      </Modal.Header>
      <Modal.Body>Name and age cannot be empty</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShow(false)}>
          Got it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvalidModal;
