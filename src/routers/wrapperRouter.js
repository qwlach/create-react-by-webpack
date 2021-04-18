import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

function NoAuth () {
  return (
    <div>
      没权限
    </div>
  )
}

export default function WrapperRouter({ path = '', component, ...props }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(
    () => {
      setIsAuth(true);
    },
    [path]
  )

  return (
    <Route
      path={path}
      component={isAuth ? component : NoAuth}
    />
  )
}