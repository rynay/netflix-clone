import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  condition,
  children,
  redirect,
  ...restProps
}) => {
  return (
    <>
      {condition ? (
        <Route {...restProps}>{children}</Route>
      ) : (
        <Redirect to={redirect} />
      )}
    </>
  );
};
