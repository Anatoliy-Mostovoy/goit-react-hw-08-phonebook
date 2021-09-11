import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../User/User';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import { useSelector } from 'react-redux';

const Header = () => {
  const loggedIn = useSelector(getLoggedIn);
  return (
    <header>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
        <NavLink to="/login" exact>
          Login
        </NavLink>
        <NavLink to="/register" exact>
          Register
        </NavLink>

        {loggedIn && <User />}
      </nav>
    </header>
  );
};

export default Header;
