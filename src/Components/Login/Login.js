import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';
import s from './Login.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const userInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(login(userInfo));
  };

  return (
    <div className={s.Container}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={s.Label}>Email address</Form.Label>
          <Form.Control
            className={s.Input}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={s.Label}>Password</Form.Label>
          <Form.Control
            className={s.Input}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className={s.Button} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
