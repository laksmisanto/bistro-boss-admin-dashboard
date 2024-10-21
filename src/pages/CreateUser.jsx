import React from "react";
import { Link } from "react-router-dom";

const CreateUser = () => {
  return (
    <>
      <div className="w-2/5 space-y-4 md:space-y-6">
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
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default CreateUser;
