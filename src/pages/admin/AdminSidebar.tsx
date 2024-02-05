import { Link } from "react-router-dom";
import {
  IoIosHome,
  IoIosListBox,
  IoIosCart,
  IoMdPeople,
  IoIosCard,
} from "react-icons/io";
import { useAuth } from "../../context/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { FaLeaf, FaShopify } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import Button from "../../components/ui/Button";

const menuItems = [
  {
    icon: <IoIosHome className="text-2xl" />,
    label: "Dashboard",
    link: "/admin",
  },
  {
    icon: <IoIosListBox className="text-2xl" />,
    label: "Categories",
    link: "/admin/categories",
  },
  {
    icon: <IoIosCart className="text-2xl" />,
    label: "Products",
    link: "/admin/products",
  },
  {
    icon: <FaShopify className="text-2xl" />,
    label: "Orders",
    link: "/admin/orders",
  },
  {
    icon: <IoIosCard className="text-2xl" />, // Assuming you have an appropriate icon for payments or transactions
    label: "Payments",
    link: "/admin/payments",
  },
  {
    icon: <IoMdPeople className="text-2xl" />,
    label: "Customers",
    link: "/admin/users",
  },
];

const AdminSidebar = ({
  open,
  handleNavToggle,
}: {
  open: boolean;
  handleNavToggle: () => void;
}) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  return (
    <nav
      className={`fixed   left-0 h-full p-4 transition-all duration-300 group z-30 overflow-hidden shadow-2xl xl:shadow-none text-green-50 bg-green-800 ${
        open
          ? "w-full md:w-64 block"
          : "w-0 md:w-0 hover:w-64 xl:w-16 hidden xl:block"
      }`}
    >
      <div className="absolute flex items-center space-x-2">
        <RouterLink to="/" className="flex items-center">
          <FaLeaf className="mr-2 text-4xl text-green-500" />
          <span
            className={`${
              open ? "block" : "hidden"
            }  group-hover:block text-xl font-bold text-green-50`}
          >
            Organic Shop
          </span>
        </RouterLink>
      </div>

      <Button
        onClick={handleNavToggle}
        variant="ghost"
        className={`absolute top-2 right-2 ${
          open ? "block opacity-100 bg-green-700" : "opacity-0"
        }  group-hover:opacity-100 transition-opacity group-hover:delay-300 duration-100`}
      >
        <ImMenu />
      </Button>
      <div className="w-full h-[1px] mt-16 bg-green-600" />
      <ul className="absolute py-5 ">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center mb-5">
            {item.icon}
            <Link
              to={item.link}
              className={`${
                open ? "block" : "hidden"
              } text-gray-300 group-hover:block ml-2  hover:text-white`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        onClick={handleLogout}
        className="absolute p-0 hover:p-2 bottom-5"
      >
        <FiLogOut className="text-2xl" />
        <span
          className={`${open ? "block" : "hidden"} ml-2 group-hover:block `}
        >
          {" "}
          Logout
        </span>
      </Button>
    </nav>
  );
};

export default AdminSidebar;
