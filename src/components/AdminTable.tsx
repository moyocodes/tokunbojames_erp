import React, { useState, useEffect } from "react";

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "pdfmake/build/pdfmake.js";
import "pdfmake/build/vfs_fonts.js";

const $ = require("jquery");
$.DataTable = require("datatables.net");

const AdminTable: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    $(document).ready(function () {
      let table;

      if ($.fn.dataTable.isDataTable("#adminTable")) {
        table = $("#adminTable").DataTable({
          bDestroy: true,
          bProcessing: true,
          pagingType: "full_numbers",
          pageLength: 5,
          dom: "Bfrtip",
          buttons: [
            { extend: "copy", className: "bg-secondary text-white py-2 px-3 rounded" },
            { extend: "csv", className: "bg-secondary text-white py-2 px-3 rounded" },
            { extend: "excel", className: "bg-secondary text-white py-2 px-3 rounded" },
            { extend: "print", className: "bg-secondary text-white py-2 px-3 rounded" },
          ],
          autoWidth: true,
          scrollX: true,
          paging: true,
          processing: true,
          lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"],
          ],
          // responsive: true,
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        table = $("#adminTable").DataTable({
          paging: true,
          // buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
          dom: "Bfrtip",
          pagingType: "full_numbers",
          pageLength: 5,
          bProcessing: true,
          lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"],
          ],
          buttons: [
            { extend: "copy", className: "bg-secondary text-white py-2 px-3 rounded" },
            { extend: "csv", className: "bg-secondary text-white py-2 px-3 rounded" },
            { extend: "excel", className: "bg-secondary text-white py-2 px-3 rounded" },
            { extend: "print", className: "bg-secondary text-white py-2 px-3 rounded" },
          ],
        });
      }
    });

    setMounted(true);

    return () => {
      $("#adminTable").DataTable().destroy();
      setMounted(false);
    };
  }, []);

  return mounted ? (
    <div className="w-full overflow-x-scroll" id="admin">
      <div>
        <table id="adminTable" className="row-border hover w-full">
          {children}
        </table>
      </div>
    </div>
  ) : (
    <table id="adminTable" className="row-border hover w-full">
      {children}
    </table>
  );
};

export default AdminTable;
