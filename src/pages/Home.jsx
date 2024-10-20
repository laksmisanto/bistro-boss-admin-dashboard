import { FaUsers, FaShoppingBag } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import CountUp from "react-countup";

const Home = () => {
  return (
    <>
      <div className="w-full grid grid-cols-4 gap-5">
        {/* Total Users Card Start */}
        <div className="flex items-center px-4 py-4 bg-gray-100 shadow rounded">
          <div className="w-12 h-12 bg-orange-200 rounded-full flex justify-center items-center">
            <FaUsers size={24} className="text-orange-600" />
          </div>
          <div className="pl-4">
            <h4 className="font-roboto font-bold text-2xl text-gray-700">
              <CountUp end={84586} duration={10} />
            </h4>
            <p className="font-roboto text-sm text-gray-500">Total User</p>
          </div>
        </div>
        {/* Total Product Card Start */}
        <div className="flex items-center px-4 py-4 bg-gray-100 shadow rounded">
          <div className="w-12 h-12 bg-purple-200 rounded-full flex justify-center items-center">
            <AiFillProduct size={24} className="text-purple-600" />
          </div>
          <div className="pl-4">
            <h4 className="font-roboto font-bold text-2xl text-gray-700">
              <CountUp end={2658} duration={10} />
            </h4>
            <p className="font-roboto text-sm text-gray-500">Total Products</p>
          </div>
        </div>
        {/* Total Category Card Start */}
        <div className="flex items-center px-4 py-4 bg-gray-100 shadow rounded">
          <div className="w-12 h-12 bg-sky-200 rounded-full flex justify-center items-center">
            <BiSolidCategory size={24} className="text-sky-600" />
          </div>
          <div className="pl-4">
            <h4 className="font-roboto font-bold text-2xl text-gray-700">
              <CountUp end={125} duration={10} />
            </h4>
            <p className="font-roboto text-sm text-gray-500">Total Category</p>
          </div>
        </div>
        {/* Total Order Card Start */}
        <div className="flex items-center px-4 py-4 bg-gray-100 shadow rounded">
          <div className="w-12 h-12 bg-green-200 rounded-full flex justify-center items-center">
            <FaShoppingBag size={24} className="text-green-600" />
          </div>
          <div className="pl-4">
            <h4 className="font-roboto font-bold text-2xl text-gray-700">
              <CountUp end={10521} duration={10} />
            </h4>
            <p className="font-roboto text-sm text-gray-500">Total Order</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
