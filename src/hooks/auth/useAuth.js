// @ts-nocheck
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { useState, useReducer } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { LOGIN_URL } from 'url/auth/AuthUrl';
import { LOADING_STARTS, LOADING_STOPS } from 'types/LoadingTypes';
import { authReducers } from 'reducers/auth/authReducers';

 const useAuth = () => {

  const navigate = useNavigate();
  const loginState = {
    email: '',
    password: '',
  };

  const [login, setLogin] = useState(loginState);

  const [{ isLoading }, dispatch] = useReducer(authReducers, {
    isLoading: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  // eslint-disable-next-line consistent-return
  const loginUser = async (data) => {
    dispatch({
      type: LOADING_STARTS,
    });

    try {
      const response = await axios.post(`${LOGIN_URL}`, data);
      if (response.data.status === 'OK') {
        sessionStorage.setItem('token', response.data.data.token);
        localStorage.setItem('token', response.data.data.token);
        toast.success('Logged in successfully');
        navigate("/admin");
      }
    } catch (e) {
      if (e) {
        dispatch({
          type: LOADING_STOPS,
        });

        // toast.error('Something went wrong!');
        if (e.response.data.message) {
          dispatch({
            type: LOADING_STOPS,
          });

          toast.error(e.response.data.message);
        }
      }
    }
  };

  return { login, onChange, loginUser, isLoading };
};

export default useAuth;