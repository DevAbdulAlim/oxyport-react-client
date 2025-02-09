import Select from "./ui/Select";
import { useSearchParams } from "react-router-dom";

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set("sortBy", value);
    } else {
      newParams.delete("sortBy");
    }

    setSearchParams(newParams);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="sortBy" className="mr-2 font-medium text-gray-700">
        Sort by:
      </label>
      <Select
        id="sortBy"
        defaultValue={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
      >
        <option value="name">Name</option>
        <option value="createdAt">Created At</option>
      </Select>
    </div>
  );
}
