import { AiOutlineWarning } from "react-icons/ai";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-full py-20">
      <AiOutlineWarning className="text-5xl text-gray-500" />
      <h1 className="ml-2 text-2xl font-bold text-gray-800">Not Found</h1>
    </div>
  );
}

export default NotFound;
