import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import reportWebVitals from "./reportWebVitals";
import AdminHomepage from "./pages/AdminHomepage";
import LandlordDetails from "pages/LandlordDetails";
import AllInvoices from "pages/AllInvoices";
import Customers from "pages/Customers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<ToastContainer />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/register" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<AdminHomepage />} />
				<Route path="/landlords" element={<LandlordDetails />} />
				<Route path="/customers" element={<Customers />} />
				<Route path="/invoices" element={<AllInvoices />} />
			</Routes>
			{/* <App /> */}
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
