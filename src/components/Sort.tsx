import Select from "./ui/Select";
import { useSearchParams } from "react-router-dom";

interface SortProps {
  options: { value: string; label: string }[];
}

export default function Sort({ options }: SortProps) {
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
      <Select
        id="sortBy"
        defaultValue={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
}
