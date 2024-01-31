// import React from "react";

// export default function Users() {
//   return <div>Users</div>;
// }
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import UserTable from "../../../components/users/UserTable"; // Assuming you have a UserTable component
// import Pagination from "../../../components/Pagination";
// import { useDebounce } from "usehooks-ts";
// import { User } from "../../../lib/types"; // Assuming you have a User type defined
// import { userService } from "../../../api/api"; // Assuming you have a userService for API calls
// import { FiSearch } from "react-icons/fi";
// import Select from "../../../components/ui/Select";
// import Input from "../../../components/ui/Input";
// import NotFound from "../../../components/NotFound";
// import ExportCSV from "../../../components/ExportCSV";
// import Loader from "../../../components/ui/Loader";

// export default function Users() {
//   const location = useLocation();
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<Boolean>(true);
//   const [totalUsers, setTotalUsers] = useState<number>(0);
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

//     userService
//       .getUsers(params)
//       .then((response) => {
//         setUsers(response.data.users);
//         setTotalUsers(response.data.totalItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching users", error);
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

//     userService
//       .getUsers(params)
//       .then((response) => {
//         setUsers(response.data.users);
//         setTotalUsers(response.data.totalItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching users", error);
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

//     userService
//       .getUsers(params)
//       .then((response) => {
//         setUsers(response.data.users);
//         setTotalUsers(response.data.totalItems);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching users", error);
//         setError(error);
//       });
//   };

//   const totalPages = Math.ceil(totalUsers / pageSize);

//   return (
//     <div className="container px-3 py-8 mx-auto">
//       {/* topbar */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">User List</h2>
//         <ExportCSV data={users} />
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
//               placeholder="Search users..."
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
//               <option value="name">Name</option>
//               <option value="createdAt">Joined At</option>
//             </Select>
//           </div>
//         </form>
//       </div>
//       {/* user table */}
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : users && users.length > 0 ? (
//         <UserTable users={users} />
//       ) : (
//         <NotFound />
//       )}

//       {/* pagination */}
//       <Pagination
//         itemsPerPage={pageSize}
//         totalItems={totalUsers}
//         totalPages={totalPages}
//         currentPage={page}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

import React from "react";

export default function Users() {
  return <div>Users</div>;
}
