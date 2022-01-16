
import CustomerTable from "components/tables/CustomerTable";
import React from "react";
import AdminLayout from "../components/admin/AdminLayout";

const Customers: React.FC = () => {
	return (
		<>
			<AdminLayout>
				<CustomerTable />
			</AdminLayout>
		</>
	);
};

export default Customers;
