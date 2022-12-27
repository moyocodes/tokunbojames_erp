import LandlordTable from "components/tables/LandlordTable";
import React from "react";
import AdminLayout from "../components/admin/AdminLayout";

const LandlordDetails: React.FC = () => {
  return (
    <>
      <AdminLayout>
				<LandlordTable />
			</AdminLayout>
    </>
  );
};

export default LandlordDetails;
