import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

type Props = {
  children?: JSX.Element | JSX.Element[] | string | string[];
};

const AdminLayout: React.FC<Props> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="flex fixed h-screen">
        <NavigationBar isOpen={isOpen} setOpen={setOpen} />
        <div className="w-full">
          <Header isOpen={isOpen} setOpen={setOpen} />
          <div className={`${isOpen ? "w-header" : "w-header-full"} absolute top-44 sm:top-20 h-5/6 overflow-y-scroll px-6 pt-6`}>
            <div>{children}</div>
          </div>
          <Footer isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
