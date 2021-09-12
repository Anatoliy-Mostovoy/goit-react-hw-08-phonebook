import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../User/User';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

const Header = () => {
  const loggedIn = useSelector(getLoggedIn);
  return (
    <header className={s.Container}>
      <nav>
        <div className={s.MainNav}>
          <div className={s.Home}>
            <NavLink
              className={s.Link}
              activeClassName={s.LinkActive}
              to="/"
              exact
            >
              Home
            </NavLink>
            {loggedIn && (
              <NavLink
                className={s.Link}
                activeClassName={s.LinkActive}
                to="/contacts"
                exact
              >
                Contacts
              </NavLink>
            )}
          </div>
          {!loggedIn && (
            <div>
              <NavLink
                className={s.Link}
                activeClassName={s.LinkActive}
                to="/login"
                exact
              >
                Login
              </NavLink>
              <NavLink
                className={s.Link}
                activeClassName={s.LinkActive}
                to="/register"
                exact
              >
                Register
              </NavLink>
            </div>
          )}
        </div>

        {loggedIn && <User />}
      </nav>
    </header>
  );
};

export default Header;
