// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import OrderTable from "../../../components/orders/OrderTable"; // Assuming you have an OrderTable component
// import Pagination from "../../../components/Pagination";
// import { useDebounce } from "usehooks-ts";
// import { Order } from "../../../lib/types"; // Assuming you have an Order type defined
// import { orderService } from "../../../api/api"; // Assuming you have an orderService for API calls
// import { FiSearch } from "react-icons/fi";
// import Select from "../../../components/ui/Select";
// import Input from "../../../components/ui/Input";
// import NotFound from "../../../components/NotFound";
// import ExportCSV from "../../../components/ExportCSV";
// import Loader from "../../../components/ui/Loader";

// export default function Orders() {
//   const location = useLocation();
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState<Boolean>(true);
//   const [totalOrders, setTotalOrders] = useState<number>(0);
//   const [error, setError] = useState();
//   const [sortBy, setSortBy] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(5);

//   const debouncedSearch = useDebounce(search, 500);
//   const debouncedSortBy = useDebounce(sortBy, 500);

//   useEffect(() => {
//     const params = {
//       sortBy: debouncedSortBy,
//       sortOrder,
//       search: debouncedSearch,
//       page: page,
//       pageSize: pageSize,
//     };

//     orderService
//       .getOrders(params)
//       .then((response) => {
//         setOrders(response.data.orders);
//         setTotalOrders(response.data.totalItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders", error);
//         setError(error);
//       });
//   }, [page, pageSize, debouncedSortBy, sortOrder, debouncedSearch, location]);

//   const handlePageChange = (page: number) => {
//     setPage(page);
//   };

//   const handleSearch = () => {
//     const params = {
//       sortBy: debouncedSortBy,
//       sortOrder,
//       search: debouncedSearch,
//       page: 1,
//       pageSize: 5,
//     };

//     orderService
//       .getOrders(params)
//       .then((response) => {
//         setOrders(response.data.orders);
//         setTotalOrders(response.data.totalItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders", error);
//         setError(error);
//       });
//   };

//   const handleSort = (selectedSortBy: string) => {
//     setSortBy(selectedSortBy);
//     setSortOrder("asc");

//     const params = {
//       sortBy: selectedSortBy,
//       sortOrder: "asc",
//       search: debouncedSearch,
//       page: 1,
//       pageSize: 5,
//     };

//     orderService
//       .getOrders(params)
//       .then((response) => {
//         setOrders(response.data.orders);
//         setTotalOrders(response.data.totalItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders", error);
//         setError(error);
//       });
//   };

//   const totalPages = Math.ceil(totalOrders / pageSize);

//   return (
//     <div className="container px-3 py-8 mx-auto">
//       {/* topbar */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">Order List</h2>
//         <ExportCSV data={orders} />
//       </div>

//       {/* filter */}
//       <div className="flex flex-col items-center justify-between space-x-4 space-y-4 md:flex-row">
//         <form
//           onSubmit={handleSearch}
//           className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
//         >
//           <div className="relative flex items-center md:w-64">
//             <FiSearch className="absolute w-6 h-6 text-gray-400 pointer-events-none left-1 top-2" />
//             <Input
//               type="text"
//               id="search"
//               placeholder="Search orders..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-8"
//             />
//           </div>
//           <div className="flex items-center">
//             <label htmlFor="sortBy" className="mr-2 font-medium text-gray-700">
//               Sort by:
//             </label>
//             <Select
//               id="sortBy"
//               value={sortBy}
//               onChange={(e) => handleSort(e.target.value)}
//             >
//               <option value="createdAt">Date</option>
//               <option value="totalAmount">Total Amount</option>
//             </Select>
//           </div>
//         </form>
//       </div>
//       {/* order table */}
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : orders && orders.length > 0 ? (
//         <OrderTable orders={orders} />
//       ) : (
//         <NotFound />
//       )}

//       {/* pagination */}
//       <Pagination
//         itemsPerPage={pageSize}
//         totalItems={totalOrders}
//         totalPages={totalPages}
//         currentPage={page}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

import React from "react";

export default function Orders() {
  return <div>Orders</div>;
}
