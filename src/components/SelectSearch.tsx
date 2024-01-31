import { useCallback, useEffect, useRef, useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import config from "../config/config";

export interface Option {
  value: number;
  label: string;
}

interface SelectSearchProps {
  value: Option;
  handleSelectChange: (selectedOption: Option | null) => void; // Adjusted type
  searchTerm: string;
}

const mapOption = (items: any[]): Option[] => {
  return items.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
};

export default function SelectSearch({
  value,
  handleSelectChange,
  searchTerm,
}: SelectSearchProps) {
  const debounceTimerRef = useRef<NodeJS.Timeout>();
  const [selectedValue, setSelectedValue] = useState<Option | null>(value);

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimerRef.current); // Clear timeout on unmount
    };
  }, []);

  const debouncedLoadOptions = useCallback(
    async (inputValue: string): Promise<Option[]> => {
      clearTimeout(debounceTimerRef.current);

      return new Promise((resolve, reject) => {
        debounceTimerRef.current = setTimeout(async () => {
          try {
            const response = await axios.get(
              `${config.apiBaseUrl}/${searchTerm}?page=1&search=${inputValue}`
            );

            const options = mapOption(response.data[searchTerm]);
            resolve(options);
          } catch (error) {
            console.error("Error fetching data:", error);
            reject([]);
          }
        }, 1000);
      });
    },
    [searchTerm]
  );

  const handleInputChange = (
    inputValue: string,
    callback: (options: Option[]) => void
  ) => {
    debouncedLoadOptions(inputValue).then((options) => {
      callback(options);
    });
  };

  const handleChange = (selectedOption: Option | null) => {
    setSelectedValue(selectedOption);
    handleSelectChange(selectedOption); // Pass the selected option directly
  };

  return (
    <AsyncSelect
      cacheOptions
      placeholder={`Select ${searchTerm}`}
      loadOptions={(inputValue, callback) =>
        handleInputChange(inputValue, callback)
      }
      defaultOptions
      onChange={handleChange}
      value={selectedValue}
    />
  );
}
