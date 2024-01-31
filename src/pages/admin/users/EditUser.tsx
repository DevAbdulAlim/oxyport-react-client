// import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import UserFormContainer from "./UserForm";
// import { User, UserFormValues } from "../../../lib/types";
// import { userService } from "../../../api/api";
// import Button from "../../../components/ui/Button";
// import { useReactToPrint } from "react-to-print";
// import PrintComponent from "../../../components/PrintComponent";
// import Breadcrumb from "../../../components/Breadcrumb";

// const parseFilenames = (filenames: string): File[] => {
//   return filenames.split(",").map((filename, index) => {
//     const dummyContent = `Placeholder content for ${filename}`;
//     return new File([dummyContent], filename, { type: "image/jpeg" });
//   });
// };

// export default function EditUser() {
//   const [user, setUser] = useState<User | null>(null);
//   const { userId } = useParams<{ userId: string }>();

//   useEffect(() => {
//     if (userId !== undefined) {
//       userService
//         .getUserDetails(parseInt(userId, 10))
//         .then((response) => setUser(response.data.user))
//         .catch((error) => console.error(error));
//     }
//   }, [userId]);

//   const initialValues: UserFormValues = {
//     // Populate initial values based on the fetched user data
//   };

//   // Export to PDF handler
//   const componentRef = useRef<HTMLDivElement | null>(null);
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   return (
//     <div className="px-3 py-12 md:px-6 xl:px-12">
//       <Breadcrumb />
//       <div className="flex justify-between py-8">
//         <h3 className="text-2xl font-semibold">Update User</h3>
//         <Button onClick={handlePrint}>Print Content</Button>
//       </div>

//       {/* User edit form */}
//       {user && (
//         <UserFormContainer
//           initialValues={initialValues}
//           edit={true}
//           userId={userId}
//         />
//       )}

//       {/* Invisible print component */}
//       <div ref={componentRef}>{user && <PrintComponent user={user} />}</div>
//     </div>
//   );
// }

import React from "react";

export default function EditUser() {
  return <div>EditUser</div>;
}
