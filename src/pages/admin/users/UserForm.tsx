// import React from "react";
// import { Formik, Form, useFormikContext } from "formik";
// import Input from "../../../components/ui/Input";
// import Button from "../../../components/ui/Button";
// import axios from "axios";
// import config from "../../../config/config";
// import { useAuth } from "../../../context/AuthContext";
// import { UserFormValues } from "../../../lib/types";
// import { userSchema } from "../../../lib/yupSchema";

// const UserForm = ({ edit }: { edit: boolean }) => {
//   const { values, handleBlur, handleChange, touched, errors } =
//     useFormikContext<UserFormValues>();

//   const { state } = useAuth();

//   const handleSubmit = async (
//     values: UserFormValues,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => {
//     try {
//       const updatedValues = {
//         ...values,
//         userId: state.user?.id,
//       };
//       if (edit) {
//         const response = await axios.put(
//           `${config.apiBaseUrl}/users/${values.id}`,
//           updatedValues
//         );
//         console.log("Updated successfully:", response.data);
//       } else {
//         const response = await axios.post(
//           `${config.apiBaseUrl}/users`,
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
//         <label className="block mb-1">User name:</label>
//         <Input
//           type="text"
//           name="name"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.name}
//         />
//         {touched.name && errors.name && (
//           <div className="text-red-500">{errors.name}</div>
//         )}
//       </div>

//       <Button type="submit">{edit ? "Update User" : "Create User"}</Button>
//     </Form>
//   );
// };

// const UserFormContainer = ({
//   edit,
//   initialValues,
// }: {
//   initialValues: UserFormValues;
//   edit: boolean;
// }) => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={userSchema}
//       onSubmit={handleSubmit}
//     >
//       <UserForm edit={edit} />
//     </Formik>
//   );
// };

// export default UserFormContainer;

import React from "react";

export default function UserForm() {
  return <div>UserForm</div>;
}
