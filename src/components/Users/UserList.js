import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const UserList = ({ users }) => {
  // console.log('UserList', users);
  return (
    <ListGroup>
      {users.map((user) => {
        return (
          <ListGroup.Item key={user.id}>
            {user.name} ({user.age})
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default UserList;
