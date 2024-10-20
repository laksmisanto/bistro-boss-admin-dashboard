import foodItem from "../../public/Images/foodItem.png";
import { useState } from "react";
const AllProduct = () => {
  const [bestselling, setBestselling] = useState(true);
  const p =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor ex officia labore, magnam distinctio eius? Nostrum omnis est et doloremque in alias.";
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full font-roboto text-sm text-left rtl:text-right text-gray-500">
          <thead className="font-roboto text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-4 py-3">
                Image
              </th>
              <th scope="col" className="px-4 py-3">
                Name
              </th>
              <th scope="col" className="px-4 py-3">
                Description
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Sub Category
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Best Selling
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">
                <div className="w-10 h-10">
                  <img
                    src={foodItem}
                    alt="food item"
                    className="w-full h-auto"
                  />
                </div>
              </td>
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17".
              </th>
              <td className="px-4 py-4">
                <p>{`${p.slice(0, 24)}...`}</p>
              </td>
              <td className="px-4 py-4">Laptop</td>
              <td className="px-4 py-4">Laptop netbook</td>
              <td className="px-4 py-4">$2999</td>
              <td className="px-4 py-4">
                {bestselling ? (
                  <div className="text-green-600 flex justify-center items-center gap-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    Yes
                  </div>
                ) : (
                  <div className="text-orange-500 flex justify-center items-center gap-x-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    No
                  </div>
                )}
              </td>
              <td className="px-4 py-4">
                <table className="border-separate border-spacing-x-2">
                  <tr>
                    <td>
                      <button className="font-medium text-green-600 hover:underline">
                        Preview
                      </button>
                    </td>
                    <td>
                      <button className="font-medium text-blue-600 hover:underline">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="font-medium text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllProduct;
