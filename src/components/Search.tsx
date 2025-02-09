import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Input from "./ui/Input";
import { useDebounce } from "usehooks-ts";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedSearch = useDebounce(searchParams.get("search") || "", 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }

    setSearchParams(newParams);
  };

  return (
    <div className="relative flex items-center md:w-64">
      <FiSearch className="absolute w-6 h-6 text-gray-400 left-2 top-2" />
      <Input
        type="text"
        id="search"
        placeholder="Search categories..."
        defaultValue={debouncedSearch}
        onChange={handleSearchChange}
        className="pl-8"
      />
    </div>
  );
}
