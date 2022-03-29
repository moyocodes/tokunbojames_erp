import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-black h-screen">
      <div className="container mx-auto h-full grid">
        <div className="grid grid-cols-2 w-full max-w-4xl h-5/6 md:h-4/5 m-auto p-4">
          <div className="hidden md:block bg-white text-primary p-4 rounded-l-xl relative">
            <span>Tokunbo James & Co</span>
            <div className="h-full flex flex-col justify-center">
              {/* <h1 className="text-lg md:text-xl lg:text-2xl font-thin text-center mb-4">Plan your activities and control your progress online</h1> */}
              <img className="object-cover max-w-xs mx-auto rounded-xl" src="/assets/img2.png" alt="Tree" />
            </div>
            {/* <div className="absolute bottom-0 w-full grid left-0 pb-4">
              <div className="inline-grid grid-cols-4 gap-2 m-auto">
                <span className="w-2 h-2 bg-gray-200 rounded-full transform hover:scale-150 transition duration-500 block"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full transform hover:scale-150 transition duration-500 block"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full transform hover:scale-150 transition duration-500 block"></span>
                <span className="w-2 h-2 bg-gray-200 rounded-full transform hover:scale-150 transition duration-500 block"></span>
              </div>
            </div> */}
          </div>
          <div className="bg-white text-primary p-6 md:p-4 rounded-r-xl rounded-l-xl md:rounded-l-none col-span-2 md:col-span-1 w-full max-w-lg mx-auto">
            <div className="flex justify-end">
              <div className="rounded-l-xl rounded-r-xl shadow-2xl">
                <Link to="/register" className="bg-secondary hover:bg-secondary-dark transition duration-500 text-gray-100 px-4 py-2 text-xs rounded-l-xl">
                  Sign up
                </Link>
                <Link to="/login" className="bg-primary  hover:bg-secondary-dark transition duration-500 text-gray-100 px-4 py-2 text-xs rounded-r-xl">
                  Sign in
                </Link>
              </div>
            </div>
            <div className="h-full flex flex-col justify-center">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
