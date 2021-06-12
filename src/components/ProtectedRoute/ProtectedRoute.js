import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ path, children, alternative, condition }) => {
  return (
    <>
      <Route path={path}>
        {condition ? children : <Redirect to={alternative} />}
      </Route>
    </>
  );
};
