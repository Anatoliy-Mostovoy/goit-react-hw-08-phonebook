import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ children, altPath, props }) => {
  const LoggedIn = useSelector(getLoggedIn);
  return (
    <Route {...props}>{LoggedIn ? children : <Redirect to={altPath} />}</Route>
  );
};
