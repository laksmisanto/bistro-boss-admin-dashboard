import React from "react";

const CreateCategory = () => {
  return (
    <>
      <div className="w-full md:w-2/3 lg:w-2/5">
        <div className="mb-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="border-2 border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            className="border-2 border-gray-300 rounded p-2 w-full"
          ></textarea>
        </div>
        <div className="mb-2 relative break-words">
          <span className="w-full h-full flex justify-center items-center p-2 border-2 border-gray-300 rounded cursor-pointer">
            + Upload Image
          </span>
          <input
            type="file"
            name="image"
            id="image"
            className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="">Status</label>
          <select
            name="status"
            id="status"
            className="border-2 border-gray-300 rounded p-2 w-full"
          >
            <option selected>Select option</option>
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
