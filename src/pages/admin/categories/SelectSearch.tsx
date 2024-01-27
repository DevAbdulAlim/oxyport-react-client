import React, { useCallback } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import config from "../../../config";

interface Option {
  value: string;
  label: string;
}

const mapCategoryToOption = (categories: any[]): Option[] => {
  return categories.map((category: any) => ({
    value: category.id,
    label: category.name,
  }));
};

export default function SelectSearch() {
  let debounceTimer: NodeJS.Timeout;

  const debouncedLoadOptions = useCallback(
    (inputValue: string, callback: (options: Option[]) => void) => {
      clearTimeout(debounceTimer);

      debounceTimer = setTimeout(async () => {
        try {
          const response = await axios.get(
            `${config.apiBaseUrl}/categories?search=${inputValue}`
          );

          const options = mapCategoryToOption(response.data.categories);
          callback(options);
        } catch (error) {
          console.error("Error fetching data:", error);
          callback([]);
        }
      }, 1000); // Adjust debounce delay as needed
    },
    []
  );

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={(inputValue, callback) =>
        debouncedLoadOptions(inputValue, callback)
      }
      defaultOptions
    />
  );
}
