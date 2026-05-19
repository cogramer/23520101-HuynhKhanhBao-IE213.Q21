import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [name, setName] = useState("");
  const [id, setId] = useState("");

  // React Router v6
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const login = () => {

    // gọi hàm login từ App.js
    props.login({
      name: name,
      id: id
    });

    // chuyển về homepage
    navigate('/');
  };

  return (
    <div>
      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={onChangeName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={onChangeId}
          />
        </Form.Group>

        <Button variant="primary" onClick={login}>
          Submit
        </Button>

      </Form>
    </div>
  );
};

export default Login;