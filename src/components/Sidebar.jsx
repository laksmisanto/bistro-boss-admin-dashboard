import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaUser,
  FaUsers,
  FaUserPlus,
  FaShoppingCart,
  FaAngleDown,
} from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
const Sidebar = () => {
  const [productDropdown, setProductDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-roboto font-medium">
            {/* Dashboard Start */}
            <li>
              <Link
                to={"/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdDashboard />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            {/* User Dropdown Menu Start */}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setUserDropdown(!userDropdown)}
              >
                <FaUser />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  User
                </span>
                <FaAngleDown />
              </button>
              <ul
                id="dropdown"
                className={
                  userDropdown ? "py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to={"/alluser"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FaUsers size={20} />
                    <span className="pl-2">All User</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/createuser"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FaUserPlus size={20} />
                    <span className="pl-2"> Create User</span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* Product Dropdown Menu Start */}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setProductDropdown(!productDropdown)}
              >
                <FaShoppingCart />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Product
                </span>
                <FaAngleDown />
              </button>
              <ul
                id="dropdown"
                className={
                  productDropdown ? "py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to={"/allproduct"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/createproduct"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Create Product
                  </Link>
                </li>
              </ul>
            </li>
            {/* Category Dropdown Menu Start */}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setCategoryDropdown(!categoryDropdown)}
              >
                <BiSolidCategory />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Category
                </span>
                <FaAngleDown />
              </button>
              <ul
                id="dropdown"
                className={
                  categoryDropdown ? "py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to={"/allcategory"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/createcategory"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Create Category
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
