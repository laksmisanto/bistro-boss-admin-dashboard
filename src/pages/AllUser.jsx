import { useState } from "react";
import profileImage from "../../public/Images/profileImage.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";

const AllUser = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [images, setImages] = useState([]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
    }
  };
  const handleUserUpdate = () => {
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
      {/* toast container start */}
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
      {/* table start */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full font-roboto text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            {/* table head start */}
            <tr>
              <th scope="col" className="px-6 py-3">
                User Image
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                User Role
              </th>
              <th scope="col" className="px-6 py-3">
                User Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {/* table body start */}
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">
                <div className="w-10 h-10">
                  <img
                    src={profileImage}
                    alt="food item"
                    className="w-full h-auto"
                  />
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                LS Santo
              </th>
              <td className="px-6 py-4">ls.computerinfo1998@gmail.com</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Active
                </div>
              </td>
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
                    src={profileImage}
                    alt="food item"
                    className="w-full h-auto"
                  />
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                LS Santo
              </th>
              <td className="px-6 py-4">ls.computerinfo1998@gmail.com</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-x-2 text-orange-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  De-Active
                </div>
              </td>
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
                    src={profileImage}
                    alt="food item"
                    className="w-full h-auto"
                  />
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                LS Santo
              </th>
              <td className="px-6 py-4">ls.computerinfo1998@gmail.com</td>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-x-2 text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Active
                </div>
              </td>
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
      {/* delete modal end */}
      {/* preview modal start */}
      {previewModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="py-5 w-full h-full flex justify-center items-center z-50">
            <div className="relative bg-gray-200 shadow-md rounded-lg p-6">
              <div
                onClick={() => setPreviewModal(false)}
                className="absolute -top-3 -right-3 flex justify-center items-center w-10 h-10 mb-4 rounded-full bg-gray-50 cursor-pointer border-2 border-gray-200"
              >
                <MdClose size={32} color="red" />
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-blue-400 mx-auto">
                  <img
                    src={profileImage}
                    alt="preview"
                    className="w-full h-auto overflow-hidden object-contain rounded-full"
                  />
                </div>
                <h3 className="font-roboto text-lg text-gray-800 mt-2">
                  laksmi santo
                </h3>
                <p className="font-roboto text-base text-gray-600">
                  ls.computerinfo1998@gmail.com
                </p>

                <div className="font-roboto text-base text-gray-800 flex justify-between items-center border-t mt-2 pt-2 border-gray-400">
                  <p>
                    Role: <span className="text-gray-500">Admin</span>
                  </p>
                  <p>
                    Status: <span className="text-gray-500">Active</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* preview modal end */}
      {/* edit modal start */}
      {editModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="py-5 w-full h-full flex justify-center items-center z-50">
            <div className="bg-gray-200 shadow-md rounded-lg p-6 w-96">
              <div className="w-full flex flex-col gap-y-2">
                <div className="relative  w-16 h-16 rounded-full border-2 border-blue-400 mx-auto">
                  <img
                    src={profileImage}
                    alt="preview"
                    className="w-full h-auto overflow-hidden object-contain rounded-full"
                  />
                  <div className="absolute w-full h-full flex justify-center items-center rounded-full bg-opacity-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 cursor-pointer opacity-0 hover:opacity-100 transition-all ease-linear">
                    <FaCloudUploadAlt size={24} className="text-gray-50" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                    placeholder="ls santo"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    placeholder="+8801*********"
                    required=""
                  />
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmpassword"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                      required=""
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-x-5 mt-5">
                  <button
                    onClick={() => setEditModal(false)}
                    type="submit"
                    className="w-full text-white bg-gray-700  focus:ring-4 focus:outline-none focus:ring-sky-300 font-roboto rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUserUpdate}
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-roboto rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Update User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Edit Product Modal */}
    </>
  );
};

export default AllUser;
