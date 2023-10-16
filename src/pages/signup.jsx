import React from "react";
import { useNavigate } from "react-router-dom";
import eupheusLogo from "../images/eupheus-logo.png";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div className="w-[40%]">
          <div className="text-center md:text-left justify-center">
            <img
              width="180px"
              height="180px"
              src={eupheusLogo}
              alt="Eupheus Logo"
            />
          </div>
          <div className="my-3 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4  text-center font-semibold text-slate-500">
              SIGNUP
            </p>
          </div>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Name"
            />

            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              >
                Forget Password?
              </a>
            </div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none ">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?{" "}
            <span>
              <a
                className="text-red-600 hover:underline hover:underline-offset-4 hover:cursor-pointer"
                onClick={() => navigate("/")}
              >
                Log in
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
