// import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import OrderFormContainer from "./OrderForm";
// import { Order, OrderFormValues } from "../../../lib/types";
// import { orderService } from "../../../api/api";
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

// export default function EditOrder() {
//   const [order, setOrder] = useState<Order | null>(null);
//   const { orderId } = useParams<{ orderId: string }>();

//   useEffect(() => {
//     if (orderId !== undefined) {
//       orderService
//         .getOrderDetails(parseInt(orderId, 10))
//         .then((response) => setOrder(response.data.order))
//         .catch((error) => console.error(error));
//     }
//   }, [orderId]);

//   const initialValues: OrderFormValues = {
//     // Populate initial values based on the fetched order data
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
//         <h3 className="text-2xl font-semibold">Update Order</h3>
//         <Button onClick={handlePrint}>Print Content</Button>
//       </div>

//       {/* Order edit form */}
//       {order && (
//         <OrderFormContainer
//           initialValues={initialValues}
//           edit={true}
//           orderId={orderId}
//         />
//       )}

//       {/* Invisible print component */}
//       <div ref={componentRef}>{order && <PrintComponent order={order} />}</div>
//     </div>
//   );
// }

import React from "react";

export default function EditOrder() {
  return <div>EditOrder</div>;
}
