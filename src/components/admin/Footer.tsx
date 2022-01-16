import React from 'react'

export interface NavProps {
  isOpen: boolean;
}

const Footer: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <div className={`bg-white shadow p-4 ${isOpen ? "w-header" : "w-header-full"} fixed bottom-0 text-center border-t text-black`}>
      &copy; Copyright 2021
    </div>
  )
}

export default Footer;
