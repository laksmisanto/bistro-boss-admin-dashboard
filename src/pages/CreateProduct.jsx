import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const CreateProduct = () => {
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
        <button
          type="submit"
          className="w-full mt-5 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Product
        </button>
      </div>
    </>
  );
};

export default CreateProduct;
