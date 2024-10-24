import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const CreateCategory = () => {
  const [images, setImages] = useState();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <>
      <div className="w-full md:w-2/3 lg:w-2/5">
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
        <button
          type="submit"
          className="w-full mt-5 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreateCategory;
