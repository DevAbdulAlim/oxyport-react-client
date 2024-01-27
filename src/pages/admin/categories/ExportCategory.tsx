import React from "react";
import { CSVLink } from "react-csv";

const tableData = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 30, city: "San Francisco" },
  // ... other rows
];

export default function ExportCategory() {
  return (
    <CSVLink
      data={tableData}
      filename={"table-data.csv"}
      className="btn btn-primary"
    >
      Export to CSV
    </CSVLink>
  );
}
