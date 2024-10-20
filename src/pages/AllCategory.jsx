import foodItem from "../../public/images/foodItem.png";
const AllCategory = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full font-roboto text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Image
              </th>
              <th scope="col" className="px-6 py-3">
                Category name
              </th>
              <th scope="col" className="px-6 py-3">
                Category Description
              </th>
              <th scope="col" className="px-6 py-3">
                Category Status
              </th>
              <th scope="col" className="px-6 py-3">
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
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Laptop
              </th>
              <td className="px-6 py-4">this is description of laptop</td>
              <td className="px-6 py-4 text-green-600">Active</td>
              <td className="px-6 py-4">
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
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Desktop
              </th>
              <td className="px-6 py-4">this is description of Desktop</td>
              <td className="px-6 py-4 text-green-600">Active</td>
              <td className="px-6 py-4">
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

export default AllCategory;
