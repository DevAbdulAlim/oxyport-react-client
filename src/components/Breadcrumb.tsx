import { useLocation } from "react-router-dom";
import Link from "./ui/Link";

const Breadcrumb = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const pathSegments = pathName.split("/").filter((segment) => segment);

  return (
    <nav
      className="flex items-center space-x-2 text-sm text-blue-500"
      aria-label="Breadcrumb"
    >
      {pathSegments.map((segment, index) => (
        <>
          <Link
            variant="link"
            key={segment}
            to={"/" + pathSegments.slice(0, index + 1).join("/")}
            className={`hover:underline ${
              index < pathSegments.length - 1
                ? "text-gray-400"
                : "font-semibold"
            }`}
          >
            {segment}
          </Link>
          {index < pathSegments.length - 1 && (
            <span key={index} className="text-gray-400">
              /
            </span>
          )}
        </>
      ))}
    </nav>
  );
};

export default Breadcrumb;
