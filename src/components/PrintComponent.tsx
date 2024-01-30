// import { Product } from "../lib/types";

// interface PrintComponentProps {
//   product: Product;
// }

// const PrintComponent: React.FC<PrintComponentProps> = ({ product }) => {
//   console.log(product.name);
//   return (
//     <div className="hidden print:block">
//       {/* Content to be printed */}
//       <h1 className="mb-2 text-2xl font-bold">Printable Content</h1>
//       <p className="text-gray-600">{product.name}</p>
//     </div>
//   );
// };

// export default PrintComponent;
import React from "react";

export default function PrintComponent() {
  return <div>PrintComponent</div>;
}
