import React from "react";
import Layout from "../components/auth/Layout";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <Layout>
      <form className="w-full" method="post">
        <div className="mb-6 flex flex-col">
          <label className="text-xs text-primary mb-1 uppercase" htmlFor="fullName">
            Email
          </label>
          <input
            className="bg-transparent border-b border-primary focus:outline-none focus:bg-transparent hover:bg-transparent py-2 text-sm text-primary placeholder-primary-lighter"
            placeholder="Enter Email"
            type="email"
            name="email"
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
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-secondary text-white hover:bg-secondary-dark rounded-full py-3 w-32 text-center text-sm transition duration-500">Login</button>
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
