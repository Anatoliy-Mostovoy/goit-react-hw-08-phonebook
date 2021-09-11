import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const userInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(register(userInfo));
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
