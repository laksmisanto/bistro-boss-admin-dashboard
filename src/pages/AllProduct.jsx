import foodItem from "../../public/Images/foodItem.png";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllProduct = () => {
  const [bestselling, setBestselling] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = () => {
    setDeleteModal(false);
    toast.success("🦄 Successfully Deleted", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const p =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor ex officia labore, magnam distinctio eius? Nostrum omnis est et doloremque in alias.";
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                      <button
                        onClick={() => setDeleteModal(true)}
                        className="font-medium text-red-600 hover:underline"
                      >
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
                      <button
                        onClick={() => setDeleteModal(true)}
                        className="font-medium text-red-600 hover:underline"
                      >
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
                      <button
                        onClick={() => setDeleteModal(true)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      {deleteModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full flex justify-center items-center z-50">
            <div className="bg-gray-200 shadow text-center rounded-lg p-6 w-96 flex flex-col items-center">
              <div className="flex justify-center items-center w-10 h-10 mb-4 rounded-full border-2 border-red-600">
                <MdClose size={32} color="red" />
              </div>
              <h3 className="font-roboto text-2xl text-gray-800">
                Are you sure?
              </h3>
              <p className="font-roboto text-sm text-gray-600 mt-2">
                Do you really want to delete this records?
              </p>
              <div className="flex items-center justify-center gap-x-8">
                <button
                  onClick={() => setDeleteModal(false)}
                  className="px-4 py-2 font-roboto text-sm mt-5 text-gray-50 rounded bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 font-roboto text-sm mt-5 text-gray-50 rounded bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProduct;
