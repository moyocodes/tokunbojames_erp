import React from 'react';
import Hamburger from 'hamburger-react';
import { useNavigate } from 'react-router-dom';
import useUser from 'hooks/user/useUser';
import helpers from 'hooks/helpers';

export interface NavProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavProps> = ({ isOpen, setOpen }) => {
  const router = useNavigate();

  const { users } = useUser();

  console.log(users);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    router("/login");
    console.log('logout'); 
   
  }
  return (
    <>
      <div className={`bg-white shadow p-4 ${isOpen ? "w-header" : "w-header-full"} fixed`}>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#291770" distance="lg" rounded label="show menu" size={20} hideOutline={true} />
            </div>
            <h2 className="text-lg text-black font-bold">TJC Properties</h2>
          </div>
          <div className="flex items-center">
            <span className="mr-6 text-lg text-primary">
            <button   onClick={handleLogout}>
          
            <i className="fa fa-sign-out-alt text-3xl "></i>
                </button>
            </span>
            <div className="flex items-center">
              <span className="mr-2 text-primary">
                <i className="fa fa-user text-3xl"></i>
              </span>
              <div>
                {/* <h6 className="font-bold text-sm text-primary  hover:bg-secondary-dark"> {helpers.toUpperCase(users?.name)}</h6>
                <span className="text-primary-lighter text-xs">{helpers.toUpperCase(users?.role?.name)}</span> */}
                <h6 className="font-bold text-sm text-primary"> {users?.name}</h6>
                <span className="text-primary-lighter text-xs">{users?.role?.name}</span>
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
