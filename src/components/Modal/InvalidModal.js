import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const InvalidModal = ({ show, errorMessage, onCloseModal }) => {
  // const closeModalHandler = () => onCloseModal();

  const ErrModal = ({ show, errorMessage, onCloseModal }) => {
    return (
      <Modal show={show} backdrop="static">
        <Modal.Header>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => onCloseModal()}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ErrModal
          show={show}
          errorMessage={errorMessage}
          onCloseModal={onCloseModal}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default InvalidModal;
