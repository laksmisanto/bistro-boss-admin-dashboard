import foodItem from "../../public/images/foodItem.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
const AllCategory = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [images, setImages] = useState();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpdateCategory = () => {
    setEditModal(false);
    toast.success("Successfully Update", {
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
  const handleDelete = () => {
    setDeleteModal(false);
    toast.success("Successfully Deleted", {
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
  return (
    <>
      {/* Toast container start */}
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
      {/* All category table start */}
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
                      <button
                        onClick={() => setPreviewModal(true)}
                        className="font-medium text-green-600 hover:underline"
                      >
                        Preview
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => setEditModal(true)}
                        className="font-medium text-blue-600 hover:underline"
                      >
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
                      <button
                        onClick={() => setPreviewModal(true)}
                        className="font-medium text-green-600 hover:underline"
                      >
                        Preview
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => setEditModal(true)}
                        className="font-medium text-blue-600 hover:underline"
                      >
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
      </div>
      {/* delete modal start */}
      {deleteModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full flex justify-center items-center z-50">
            <div className="bg-gray-200 shadow-md text-center rounded-lg p-6 w-96 flex flex-col items-center">
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
      {/* preview modal start */}
      {previewModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="py-5 w-full h-full flex justify-center items-center z-50">
            <div className="relative bg-gray-200 shadow-md rounded-lg p-6 w-96">
              <div
                onClick={() => setPreviewModal(false)}
                className="absolute -top-3 -right-3 flex justify-center items-center w-10 h-10 mb-4 rounded-full bg-gray-50 cursor-pointer border-2 border-gray-200"
              >
                <MdClose size={32} color="red" />
              </div>
              <div>
                <img
                  src={foodItem}
                  alt="preview"
                  className="w-48 h-48 object-contain mx-auto"
                />
                <h3 className="font-roboto text-lg text-gray-800 my-2">
                  Name: <span className="text-gray-600">Laptop</span>
                </h3>
                <p className="font-roboto text-base text-gray-800">
                  Description:{" "}
                  <span className="text-gray-600">
                    The Apple MacBook Pro 17-inch is a high-performance laptop
                    designed for professionals and power users.
                  </span>
                </p>

                <div className="font-roboto text-base text-gray-800 flex justify-between items-center border-t mt-2 pt-2 border-gray-400">
                  <p className="text-gray-800">
                    Category Status:{" "}
                    <span className="text-green-600">Active</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* edit modal start */}
      {editModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="py-5 w-full h-full flex justify-center items-center z-50">
            <div className="bg-gray-200 shadow-md rounded-lg p-6 w-96">
              <div className="w-full">
                <div className="mb-2">
                  <label className="block font-roboto text-sm text-gray-700 pb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    className="font-roboto text-sm text-gray-800 border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-roboto text-sm text-gray-700 pb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="font-roboto text-sm text-gray-800 border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
                  ></textarea>
                </div>
                <div className="mb-2">
                  <label className="block font-roboto text-sm text-gray-700 pb-1">
                    Image
                  </label>
                  <div className="flex items-center justify-start w-full h-16  ">
                    <label
                      htmlFor="dropzone-file"
                      className="flex items-center justify-start  w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100"
                    >
                      <div className="flex items-center justify-center ml-5">
                        <FaCloudUploadAlt size={28} className="text-gray-400" />
                        <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          Click to upload
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={onImageChange}
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-x-1 my-4">
                    {images && (
                      <div className="relative w-20">
                        <button
                          onClick={() => setImages()}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white"
                        >
                          <MdClose />
                        </button>
                        <img
                          src={images}
                          alt="Category Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block font-roboto text-sm text-gray-700 pb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    className="font-roboto text-sm text-gray-800 border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
                  >
                    <option value="">--Select Status--</option>
                    <option value="active">Active</option>
                    <option value="de-active">De-Active</option>
                  </select>
                </div>
                <div className="flex justify-between gap-x-2">
                  <button
                    onClick={() => setEditModal(false)}
                    type="submit"
                    className="w-full mt-5 bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateCategory}
                    type="submit"
                    className="w-full mt-5 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Update Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllCategory;
