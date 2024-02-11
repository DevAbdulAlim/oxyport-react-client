import { BiLoader } from "react-icons/bi";

function Loader() {
  return (
    <div className="flex items-center justify-center h-full py-20">
      <BiLoader className="text-5xl text-green-800 animate-spin" />
    </div>
  );
}

export default Loader;
