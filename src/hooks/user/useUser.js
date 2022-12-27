// @ts-nocheck
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { LOGGED_IN_USER_URL } from 'url/auth/AuthUrl';
import { LOADING_STARTS, LOADING_STOPS } from 'types/LoadingTypes';
import { LOGIN_USER } from 'types/auth/AuthTypes';
import { userReducers } from 'reducers/userReducers';
import { toast } from 'react-toastify';

 const useUser = () => {
        const [{ users, user, isLoading, }, dispatch] = useReducer(userReducers, {
          users: [],
          user: {},
          isLoading: false,
        });
      
        const getLoggedInUser = async () => {
          dispatch({ type: LOADING_STARTS });
          const config = {
            method: 'get',
            url: `${LOGGED_IN_USER_URL}`,
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
          };
          axios(config)
            .then((response) => {
              if (response.status === 200) {
                console.log(response.data.data);
                dispatch({
                  type: LOGIN_USER,
                  payload: {
                    users: response.data.data,
                  },
                });
              }
            })
            .catch(() => {
                toast.error('Something went wrong');
              dispatch({ type:LOADING_STOPS });
            });
        };


  useEffect(() => {
    getLoggedInUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  return { users, getLoggedInUser, user, isLoading };
};

export default useUser;