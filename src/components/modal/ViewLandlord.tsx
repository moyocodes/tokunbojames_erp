import React from "react";

const ViewLandlord = (props: any) => {
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
            <span className="mb-2 text-sm">Address</span>
            <div className="text-primary font-semibold text-lg">{details.address}</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Status</span>
            <div className="text-primary font-semibold text-lg">{details.status}</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-sm">Property desciption</span>
            <div className="text-primary font-semibold text-lg">{details.propertyDescription}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLandlord;
