import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getName } from '../../redux/auth/auth-selector';
import { logout } from '../../redux/auth/auth-operation';

export const User = () => {
  const user = useSelector(getName);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <p> Welcome {user}</p>
      <button type="button" onClick={onClick}>
        Exit
      </button>
    </>
  );
};
