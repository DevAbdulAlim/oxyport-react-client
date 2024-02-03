// import React from "react";
// import { Formik, Form, useFormikContext } from "formik";
// import Input from "../../../components/ui/Input";
// import Button from "../../../components/ui/Button";
// import axios from "axios";
// import config from "../../../config/config";
// import { useAuth } from "../../../context/AuthContext";
// import { OrderFormValues } from "../../../lib/types";
// import { orderSchema } from "../../../lib/yupSchema";

// const OrderForm = ({ edit }: { edit: boolean }) => {
//   const { values, handleBlur, handleChange, touched, errors } =
//     useFormikContext<OrderFormValues>();

//   const { state } = useAuth();

//   const handleSubmit = async (
//     values: OrderFormValues,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => {
//     try {
//       const updatedValues = {
//         ...values,
//         userId: state.user?.id,
//       };
//       if (edit) {
//         const response = await axios.put(
//           `${config.apiBaseUrl}/orders/${values.id}`,
//           updatedValues
//         );
//         console.log("Updated successfully:", response.data);
//       } else {
//         const response = await axios.post(
//           `${config.apiBaseUrl}/orders`,
//           updatedValues
//         );
//         console.log("Added successfully:", response.data);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Form className="grid grid-cols-1 gap-8">
//       <div>
//         <label className="block mb-1">Customer name:</label>
//         <Input
//           type="text"
//           name="customerName"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.customerName}
//         />
//         {touched.customerName && errors.customerName && (
//           <div className="text-red-500">{errors.customerName}</div>
//         )}
//       </div>

//       <Button type="submit">{edit ? "Update Order" : "Create Order"}</Button>
//     </Form>
//   );
// };

// const OrderFormContainer = ({
//   edit,
//   initialValues,
// }: {
//   initialValues: OrderFormValues;
//   edit: boolean;
// }) => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={orderSchema}
//       onSubmit={handleSubmit}
//     >
//       <OrderForm edit={edit} />
//     </Formik>
//   );
// };

// export default OrderFormContainer;

import React from "react";

export default function OrderForm() {
  return <div>OrderForm</div>;
}
