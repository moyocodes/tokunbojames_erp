import React, { useEffect } from "react";
import Layout from "../components/auth/Layout";
import { Link } from "react-router-dom";
import useAuth from "hooks/auth/useAuth";



export interface LoginProps {
  history: any;
  // onClick(e:MouseEvent<HTMLElement>): void,
}

const Login: React.FC  = () => {

  const { login, onChange, loginUser, isLoading } = useAuth();
  const { email, password } = login;


  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      window.history.back();
    }
  }, []);

  
  const submitForm = () => {
    return email.length > 0 && password.length > 0;
  };


  return (
    <Layout>
      <form className="w-full" 
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(login);
        }}>
        <div className="mb-6 flex flex-col">
          <label className="text-xs text-primary mb-1 uppercase" htmlFor="fullName">
            Email
          </label>
          <input
            className="bg-transparent border-b border-primary focus:outline-none focus:bg-transparent hover:bg-transparent py-2 text-sm text-primary placeholder-primary-lighter"
            placeholder="Enter Email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-xs text-primary mb-1 uppercase" htmlFor="fullName">
            Password
          </label>
          <input
            className="bg-transparent border-b border-primary focus:outline-none focus:bg-transparent hover:bg-transparent py-2 text-sm text-primary placeholder-primary-lighter"
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="flex justify-center">
        {isLoading ? (
              <button className="bg-secondary text-white hover:bg-secondary-dark rounded-full py-3 w-32 text-center text-sm transition duration-500"
              id="login"
              disabled={isLoading}
            >
              Submitting...
            </button>
          ) : (
            <button className="bg-secondary text-white hover:bg-secondary-dark rounded-full py-3 w-32 text-center text-sm transition duration-500"
              id="login"
              disabled={!submitForm()}
            >
              LOGIN
            </button>
          )}
        </div>
        <div className="text-primary text-xs italic text-center mt-2">
          New member?{" "}
          <Link className="text-secondary hover:underline" to="/register">
            Register
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
