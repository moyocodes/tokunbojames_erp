import React, { useState, useEffect } from "react";
import AdminTable from "components/AdminTable";
import { invoiceData } from "../../data/invoiceData";
import { errorMessage, successMessage } from "../reusable/ToastMessage";
import ShowModal from "../reusable/ShowModal";
import AddInvoice from "components/modal/AddInvoice";
import ViewInvoice from "components/modal/ViewInvoice";

type Props = {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  landlord?: string;
  amount?: number;
};

const InvoiceTable: React.FC = () => {
  const [allData, setAllData] = useState<Array<Props>>([]);

  const [selected, setSelected] = useState<Props>({});
  const [hideAdd, setHideAdd] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [hideView, setHideView] = useState(true);
  const [remove, setRemove] = useState(false);

  const handleDelete = (item: Props) => {
    // eslint-disable-next-line no-restricted-globals
    let ask = confirm("Are you sure you want to delete this?");

    if (ask) {
      // Delete the item here
      successMessage("I have deleted the item with the id of " + item.id);
    } else {
      errorMessage("You have stopped me from deleting this item");
    }

    setRemove(false);
    setSelected({});
  };

  useEffect(() => {
    setAllData(invoiceData);

    if (remove) {
      handleDelete(selected);
    }
  }, [allData, remove, selected, hideEdit, hideView]);

  return (
    <div className="text-sm">
      <div className="flex justify-end">
        <button className="bg-primary hover:bg-primary-dark transition duration-500 text-white py-3 w-40 rounded mb-4" type="button" onClick={() => setHideAdd(false)}>
          Add Invoice
        </button>
      </div>

      <AdminTable>
        <thead>
          <tr>
            <th className="bg-primary text-white text-left">ID</th>
            <th className="bg-primary text-white text-left">Name</th>
            <th className="bg-primary text-white text-left">Email</th>
            <th className="bg-primary text-white text-left">Phone Number</th>
            <th className="bg-primary text-white text-left">Amount</th>
            <th className="bg-primary text-white text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.amount}</td>
              <td className="flex">
                <span
                  className="text-lg mr-4"
                  onClick={() => {
                    setSelected(item);
                    setHideEdit(false);
                  }}
                >
                  <i className="fas fa-edit"></i>
                </span>
                <span
                  className="text-lg mr-4 text-primary"
                  onClick={() => {
                    setSelected(item);
                    setHideView(false);
                  }}
                >
                  <i className="fa fa-eye"></i>
                </span>
                <span
                  className="text-lg text-secondary"
                  onClick={() => {
                    setSelected(item);
                    setRemove(true);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </AdminTable>

      {!hideEdit && (
        <ShowModal setClose={setHideEdit} text="Add Invoice">
          <AddInvoice details={selected} />
        </ShowModal>
      )}

      {!hideAdd && (
        <ShowModal setClose={setHideAdd} text="Add Invoice">
          <AddInvoice />
        </ShowModal>
      )}

      {!hideView && (
        <ShowModal setClose={setHideView} text="View Invoice">
          <ViewInvoice details={selected} />
        </ShowModal>
      )}
    </div>
  );
};

export default InvoiceTable;
