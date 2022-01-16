import React from "react";
import Hamburger from "hamburger-react";

export interface NavProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavProps> = ({ isOpen, setOpen }) => {
  return (
    <>
      <div className={`bg-white shadow p-4 ${isOpen ? "w-header" : "w-header-full"} fixed`}>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#291770" distance="lg" rounded label="show menu" size={20} hideOutline={true} />
            </div>
            <h2 className="text-lg text-black font-bold">Title</h2>
          </div>
          <div className={`my-4 sm:my-0 w-full max-w-xs lg:max-w-md ${isOpen ? "hidden lg:block" : ""}`}>
            <input className="w-full bg-primary-lighter bg-opacity-10 px-4 py-2 rounded-lg focus:outline-none text-sm" type="text" placeholder="Search" />
          </div>
          <div className="flex items-center">
            <span className="mr-6 text-lg text-primary">
              <i className="fa fa-bell"></i>
            </span>
            <span className="mr-6 text-lg text-primary">
              <i className="fa fa-cog"></i>
            </span>
            <div className="flex items-center">
              <span className="mr-2 text-primary">
                <i className="fa fa-user-circle text-4xl"></i>
              </span>
              <div>
                <h6 className="font-bold text-sm">Name of user</h6>
                <span className="text-primary-lighter text-xs">Super Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 w-full"></div>
    </>
  );
};

export default Header;
