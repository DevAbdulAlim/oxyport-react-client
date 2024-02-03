import { CSVLink } from "react-csv";

interface ExportCSVProps {
  data: any[];
}

export default function ExportCSV({ data }: ExportCSVProps) {
  return (
    <CSVLink
      data={data}
      filename={"table-data.csv"}
      className="px-4 py-2 text-gray-800 transition-colors duration-300 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300"
    >
      Export to CSV
    </CSVLink>
  );
}
