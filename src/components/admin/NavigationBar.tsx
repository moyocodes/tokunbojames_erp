import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import Hamburger from "hamburger-react";
// import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export interface NavProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationBar: React.FC<NavProps> = ({ isOpen, setOpen }) => {
  // const [isOpen, setOpen] = useState<boolean>(true);
  const targetRef = useRef<null>(null);

  useEffect(() => {
    if (isOpen) {
      // disableBodyScroll(targetRef);
      window.scrollTo({ top: 0 });
    } else {
      // enableBodyScroll(targetRef);
    }

    return () => {
      // clearAllBodyScrollLocks();
    };
  });

  return (
    <div className="" ref={targetRef}>
      <div className={`${isOpen ? "w-60" : "w-14"} transition duration-500 bg-secondary text-white h-screen overflow-hidden`}>
        <div className="flex flex-col py-4">
          {/* <div className="flex justify-start items-center">
            <div className="mr-2">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#fcedcf" distance="lg" rounded label="show menu" size={25} hideOutline={true} />
            </div>
            <span className="text-2xl text-secondary font-bold">ERP</span>
          </div> */}

          <Link className="my-4 px-4 block whitespace-nowrap" to="/admin">
            <span className="w-10 h-8 inline-block">
              <i className="fa fa-home text-lg"></i>
            </span>
            <span>ERP</span>
          </Link>
          <Link className="my-4 px-4 block whitespace-nowrap" to="/admin">
            <span className="w-10 h-8 inline-block">
              <i className="fa fa-home text-lg"></i>
            </span>
            <span>Home</span>
          </Link>
          <Link className="my-4 px-4 block whitespace-nowrap" to="/landlords">
            <span className="w-10 h-8 inline-block">
              <i className="fa fa-user-circle text-lg"></i>
            </span>
            <span>Landlords</span>
          </Link>
          <Link className="my-4 px-4 block whitespace-nowrap" to="/customers">
            <span className="w-10 h-8 inline-block">
              <i className="fa fa-user text-lg"></i>
            </span>
            <span>Customers</span>
          </Link>
          <Link className="my-4 px-4 block whitespace-nowrap" to="/invoices">
            <span className="w-10 h-8 inline-block">
              <i className="fas fa-file-invoice text-lg"></i>
            </span>
            <span>Invoice</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
