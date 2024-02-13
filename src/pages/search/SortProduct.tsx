import React from "react";
import Select from "react-select";

const SortProduct: React.FC = () => {
  const options = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "date", label: "Date" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "200px", // Adjust the width as needed
      borderColor: "green", // Add border color

      borderRadius: "0.25rem", // Add border radius
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "green" : "white", // Change background color of selected option
      color: state.isSelected ? "white" : "black", // Change text color of selected option
    }),
  };

  const handleChange = (selectedOption: any) => {
    console.log("Sort By:", selectedOption);
    // Add your logic for handling the selected option here
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={handleChange}
        styles={customStyles}
        className="w-full"
      />
    </div>
  );
};

export default SortProduct;
