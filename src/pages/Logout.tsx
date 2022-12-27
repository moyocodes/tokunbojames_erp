/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();
  const [logOut, setLogOut] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const logout = () => {
    sessionStorage.setItem('token', '');
    sessionStorage.clear();
    setLogOut(true);
  };

  if (logOut) {
    return  navigate("/admin");;
  }
  return (
    <span className="mt-2">
   <i className="fa fa-sign-out" onClick={logout} />
    </span>
  );
};

export default Logout;
