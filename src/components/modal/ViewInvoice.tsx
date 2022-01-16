import React from "react";

const ViewInvoice = (props: any) => {
  const { details } = props;

  return (
    <div className="px-4 pt-6 pb-10">
      {details && (
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Name</span>
            <div className="text-primary font-semibold text-lg">{details.name}</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Email</span>
            <div className="text-primary font-semibold text-lg">{details.email}</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Phone</span>
            <div className="text-primary font-semibold text-lg">{details.phone}</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Landlord</span>
            <div className="text-primary font-semibold text-lg">{details.landlord}</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Amount</span>
            <div className="text-primary font-bold text-lg">#{details.amount}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewInvoice;
