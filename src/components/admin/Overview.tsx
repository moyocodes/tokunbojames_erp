import React from "react";

const Overview: React.FC = () => {
  return (
    <div className="">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        <div className="p-6 rounded-xl bg-primary text-white flex flex-col justify-between">
          <span className="block text-sm">Total Number of Landlords</span>
          <span className="mt-4 font-bold text-3xl text-right block">148 <span className="text-sm italic uppercase">registered</span></span>
        </div>
        <div className="p-6 rounded-xl bg-secondary text-white flex flex-col justify-between">
          <span className="block text-sm">Total Number of Customers</span>
          <span className="mt-4 font-bold text-3xl text-right block">148 <span className="text-sm italic uppercase">registered</span></span>
        </div>
        <div className="p-6 rounded-xl bg-primary text-white flex flex-col justify-between">
          <span className="block text-sm">Total Number of Tenants</span>
          <span className="mt-4 font-bold text-3xl text-right block">148 <span className="text-sm italic uppercase">registered</span></span>
        </div>
        <div className="p-6 rounded-xl bg-secondary text-white flex flex-col justify-between">
          <span className="block text-sm">Total Number of Customers</span>
          <span className="mt-4 font-bold text-3xl text-right block">148 <span className="text-sm italic uppercase">registered</span></span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
