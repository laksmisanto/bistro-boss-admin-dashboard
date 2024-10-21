import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className=" py-10 w-full min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div className="p-4 sm:p-8 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-6 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ls santo"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+8801*********"
                required=""
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:blue-sky-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <Link
                to={"/Login"}
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </p>
            <p className="text-center text-sm text-gray-700 dark:text-gray-100 mt-2">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-gray-700 text-gray-700 dark:text-gray-50"
                href="#"
              >
                {" "}
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-gray-700 text-gray-700 dark:text-gray-50"
                href="#"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
