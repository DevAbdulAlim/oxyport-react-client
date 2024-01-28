import { useCallback, useEffect, useRef, useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import config from "../config";

export interface Option {
  value: number;
  label: string;
}

interface SelectSearchProps {
  value: Option;
  handleSelectChange: (selectedOption: Option | null) => void; // Adjusted type
  searchTerm: string;
}

const mapCategoryToOption = (categories: any[]): Option[] => {
  return categories.map((category: any) => ({
    value: category.id,
    label: category.name,
  }));
};

export default function SelectSearch({
  value,
  handleSelectChange,
  searchTerm,
}: SelectSearchProps) {
  const debounceTimerRef = useRef<NodeJS.Timeout>();
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

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
              `${config.apiBaseUrl}/${searchTerm}?search=${inputValue}`
            );

            const options = mapCategoryToOption(response.data[searchTerm]);
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
