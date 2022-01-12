import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const AddUser = ({ onAddUser, onInvalidInput, onErrorMessage }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nameInvalid, setNameInvalid] = useState(false);
  const [ageInvalid, setAgeInvalid] = useState(false);

  const nameChangeHandler = (event) => {
    setNameInvalid(false);
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInvalid(false);
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 && age < 1) {
      setNameInvalid(true);
      setAgeInvalid(true);
      onErrorMessage('Invalid value for name and/or age');
      onInvalidInput();
      return;
    } else if (name.trim().length === 0) {
      setNameInvalid(true);
      onErrorMessage('Name cannot be empty');
      onInvalidInput();
      return;
    } else if (+age < 1) {
      setAgeInvalid(true);
      onErrorMessage('Invalid age value');
      onInvalidInput();
      return;
    }

    onAddUser({
      name,
      age,
      id: uuidv4(),
    });
    resetHandler();
  };

  const resetHandler = () => {
    setName('');
    setAge('');
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          onChange={nameChangeHandler}
          placeholder="Name"
          value={name}
          isInvalid={nameInvalid}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          onChange={ageChangeHandler}
          placeholder="Age"
          value={age}
          isInvalid={ageInvalid}
        />
      </Form.Group>
      <Stack direction="horizontal" gap={3}>
        <Button variant="primary" type="submit">
          Add
        </Button>
        <div className="vr"></div>
        <Button variant="outline-danger" onClick={resetHandler} ms-auto>
          Reset
        </Button>
      </Stack>

      {/* <InputGroup>
        <Form.Control
          type="text"
          onChange={nameChangeHandler}
          placeholder="Name"
          value={name}
          isInvalid={nameInvalid}
        />

        <Form.Control
          type="number"
          onChange={ageChangeHandler}
          placeholder="Age"
          value={age}
          isInvalid={ageInvalid}
        />

        <Button variant="primary" type="submit">
          Add
        </Button>
        <Button variant="outline-danger" onClick={resetHandler}>
          Reset
        </Button>
      </InputGroup> */}
    </Form>
  );
};

export default AddUser;
