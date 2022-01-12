import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import InvalidModal from './components/Modal/InvalidModal';

import './style.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([
    {
      name: 'Digby',
      age: 20,
      id: 1,
    },
    { name: 'Isabelle', age: 20, id: 2 },
  ]);

  const AddUserHandler = (newUser) => {
    // console.log('App', newUser);
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <Container>
      <InvalidModal
        show={showModal}
        onCloseModal={() => setShowModal(false)}
        errorMessage={errorMessage}
      />
      <Stack gap={3}>
        <AddUser
          onAddUser={AddUserHandler}
          onInvalidInput={() => setShowModal(true)}
          onErrorMessage={(err) => setErrorMessage(err)}
        />

        <UserList users={users} />
      </Stack>
    </Container>
  );
}
