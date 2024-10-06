import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64 ">
        <div className="w-full min-h-[94vh] border-2 p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
