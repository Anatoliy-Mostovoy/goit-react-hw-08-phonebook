import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operation';
import s from './Register.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const userInfo = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (
      userInfo.name === '' ||
      userInfo.email === '' ||
      userInfo.password === ''
    ) {
      toast.error('Input ALL your data!');
      return;
    }
    dispatch(register(userInfo));
  };

  return (
    <div className={s.Container}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className={s.Label}>Name</Form.Label>
          <Form.Control
            className={s.Input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
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

export default Register;
