import foodItem from "../../public/Images/foodItem.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
const AllProduct = () => {
  const [bestselling, setBestselling] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [images, setImages] = useState([]);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let files = e.target.files;
      let reader = new FileReader();
      reader.onload = function (e) {
        setImages((oldArray) => [...oldArray, e.target.result]);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleUpdateProduct = () => {
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
  const p =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor ex officia labore, magnam distinctio eius? Nostrum omnis est et doloremque in alias.";
  return (
    <>
      {/* toaster section start */}
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
      {/*    toaster section end */}
      {/*    All product table section start */}
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
      </div>{" "}
      .{/* Delete Modal start */}
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
      {/* Delete Modal end */}
      {/* Preview Modal start */}
      {previewModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="py-5 flex justify-center z-50">
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
                  Apple MacBook Pro 17inc.
                </h3>
                <p className="font-roboto text-base text-gray-600">
                  The Apple MacBook Pro 17-inch is a high-performance laptop
                  designed for professionals and power users. It features a
                  large, high-resolution display, powerful processors, and ample
                  storage space. Known for its sleek design, durability, and
                  seamless integration with Apple's ecosystem, the MacBook Pro
                  17-inch is ideal for tasks like video editing, graphic design,
                  and gaming.
                </p>
                <div className="border-t mt-2 border-gray-400">
                  <div className="font-roboto text-base text-gray-800 flex justify-between items-center my-1">
                    <p>
                      Category: <span className="text-gray-500">Laptop</span>
                    </p>
                    <p>
                      Sub-Category: <span className="text-gray-500">Apple</span>
                    </p>
                  </div>
                  <div className="font-roboto text-base text-gray-800 flex justify-between items-center">
                    <p>
                      Price: <span className="text-gray-500">$2999</span>
                    </p>
                    <p>
                      Best Selling: <span className="text-gray-500">Yes</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Preview Modal end */}
      {/* Edit Modal start */}
      {editModal && (
        <div className="w-full h-full absolute backdrop-blur top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="py-5 flex justify-center z-50">
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
                  <div className="flex items-center justify-start w-full h-16">
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
                        multiple="multiple"
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-x-1 my-4">
                    {images.map((image, index) => (
                      <div key={index} className="w-20">
                        <img
                          src={image}
                          alt="Category Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Category and Sub Category Start */}
                <div className="mb-2 w-full grid grid-cols-2 gap-x-2">
                  <div>
                    <label className="block font-roboto text-sm text-gray-700 pb-1">
                      Category
                    </label>
                    <select
                      name="status"
                      id="status"
                      className="font-roboto text-sm text-gray-800 border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
                    >
                      <option value="">--Select Category--</option>
                      <option value="laptop">Laptop</option>
                      <option value="desktop">Desktop</option>
                      <option value="monitor">Monitor</option>
                      <option value="mouse">Mouse</option>
                      <option value="keyboard">Keyboard</option>
                      <option value="headphone">Headphone</option>
                      <option value="printer">Printer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-roboto text-sm text-gray-700 pb-1">
                      Sub Category
                    </label>
                    <select
                      name="status"
                      id="status"
                      className="font-roboto text-sm text-gray-800 border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
                    >
                      <option value="">--Select Sub Category--</option>
                      <option value="macbook">MacBook</option>
                      <option value="hp-tablet">HP-Tablet</option>
                      <option value="dell-tablet">DeLL-Tablet</option>
                      <option value="notebook">NoteBook</option>
                    </select>
                  </div>
                </div>
                {/* Category and Sub Category Start */}
                <div className="mb-2">
                  <label className="block font-roboto text-sm text-gray-700 pb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="price"
                    className="font-roboto text-sm text-gray-800 border-2 border-gray-300 rounded-lg p-2 w-full focus:outline-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between gap-x-2 pt-5">
                  <button
                    type="button"
                    className="w-full bg-gray-600 text-white font-roboto rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={() => setEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateProduct}
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-roboto rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Update Product
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

export default AllProduct;
