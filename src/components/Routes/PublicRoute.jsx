import { Navigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/Auth/AuthSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
      shouldRedirect ? <Navigate to={redirectTo}/> : children
  );
}
