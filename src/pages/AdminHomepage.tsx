import Overview from "components/admin/Overview";
import React from "react";
import AdminLayout from "../components/admin/AdminLayout";

const AdminHomepage: React.FC = () => {
	return (
		<>
			<AdminLayout>
				<Overview />
			</AdminLayout>
		</>
	);
};

export default AdminHomepage;
