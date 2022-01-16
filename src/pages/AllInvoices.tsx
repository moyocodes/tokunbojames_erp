
import InvoiceTable from "components/tables/InvoiceTable";
import React from "react";
import AdminLayout from "../components/admin/AdminLayout";

const AllInvoices: React.FC = () => {
	return (
		<>
			<AdminLayout>
				<InvoiceTable />
			</AdminLayout>
		</>
	);
};

export default AllInvoices;
