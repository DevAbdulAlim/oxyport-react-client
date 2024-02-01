import React from "react";
import Select from "react-select";

interface Props {
  handleChange: (value: string) => void;
}

const paymentOptions = [
  { value: "cash", label: "Cash on delivery" },
  { value: "debit-card", label: "Credit/Debit Card" },
  { value: "paypal", label: "PayPal" },
  // Add more payment options as needed
];

const SelectPaymentMethod: React.FC<Props> = ({ handleChange }) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-xl font-semibold">Payment Method</h3>
      <div className="mb-4">
        <label
          htmlFor="payment"
          className="block text-sm font-medium text-gray-600"
        >
          Payment *
        </label>
        <Select
          id="payment"
          name="payment"
          options={paymentOptions}
          className="mt-1"
          onChange={(selectedOption) =>
            handleChange(selectedOption?.value || "")
          }
        />
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
