import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Breadcrum from "../components/breadcrum";
import Screensizehook from "../components/screensizehook";

const settings = () => {
  const screenSize = Screensizehook();
  return (
    <>
      <Navbar />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"settings"} />}

        <div className="w-full">
          <Breadcrum
            value={[{ name: "Settings", path: "/settings" }]}
            minibar={"settings"}
          />
          <div
            className={`h-screen ${
              screenSize.width > 550 ? "px-40" : ""
            }  bg-gray-200 `}
          >
            <div className="w-full h-full px-6 py-4  overflow-hidden  sm:max-w-lg sm:rounded-lg">
              <form>
                <div className="">
                  <label
                    className="text-xs font-bold text-gray-800 block mb-1"
                    for="user_avatar"
                  >
                    New Name
                  </label>
                  <input
                    className="h-8 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
                    type="text"
                    placeholder="New Name"
                  />
                </div>
                <div className="mt-5">
                  <label
                    className="text-xs font-bold text-gray-800 block mb-1"
                    for="user_avatar"
                  >
                    Old Password
                  </label>
                  <input
                    className="h-8 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
                    type="password"
                    placeholder="Old Password"
                  />
                </div>
                <div className="mt-5">
                  <label
                    className="text-xs font-bold text-gray-800 block mb-1"
                    for="user_avatar"
                  >
                    New Password
                  </label>
                  <input
                    className="h-8 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
                    type="password"
                    placeholder="New Password"
                  />
                </div>
                <div className="mt-5">
                  <label
                    className="text-xs font-bold text-gray-800 block mb-1"
                    for="user_avatar"
                  >
                    Confirm New Password
                  </label>
                  <input
                    className="h-8 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </div>

                <div className="mt-5">
                  <label
                    className="text-xs font-bold text-gray-800 block mb-1"
                    for="user_avatar"
                  >
                    Upload Profile Pic
                  </label>
                  <input
                    className=" text-sm w-full px-4 py-2 border border-solid bg-white border-gray-300 rounded"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                </div>

                <div className="flex items-center mt-8">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none ">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default settings;
