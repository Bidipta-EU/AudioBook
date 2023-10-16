import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Breadcrum from "../components/breadcrum";
import { ImHeadphones } from "react-icons/im";
import Popup from "../components/popup";
import Screensizehook from "../components/screensizehook";

const Audiobooksem1 = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  const screenSize = Screensizehook();

  return (
    <>
      <Navbar />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"audioboksem1"} />}
        <div className="w-full">
          <Breadcrum
            value={[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Book Section", path: "/booksection" },
              { name: "Semester 1", path: "/audiobooksem1" },
            ]}
            button={"audiobook1"}
            minibar={"dashboard"}
          />
          <div className="">
            <div className="bg-gray-200 flex flex-col space-y-4 h-screen items-center px-16 py-4">
              <div
                onClick={() => setOpenPopup(true)}
                className="hover:cursor-pointer hover:text-red-700 rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 space-x-6 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
              >
                <ImHeadphones className="h-8 w-8" />

                <div className="col-span-11 xl:-ml-5">
                  <div>Unit 0</div>
                  <div className=" text-blue-800  font-semibold">
                    INTRODUCTION
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer hover:text-red-700 rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 space-x-6 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                <ImHeadphones className="h-8 w-8" />

                <div className="col-span-11 xl:-ml-5">
                  <div>Unit 1</div>
                  <div className=" text-blue-800 font-semibold">
                    PERIODIC PROPERTIES AND VARIATION OF PROPERTIES
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer hover:text-red-700 rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 space-x-6 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                <ImHeadphones className="h-8 w-8" />

                <div className="col-span-11 xl:-ml-5">
                  <div>Unit 2</div>
                  <div className=" text-blue-800 font-semibold">
                    CHEMICAL BONDING
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer hover:text-red-700 rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 space-x-6 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                <ImHeadphones className="h-8 w-8" />

                <div className="col-span-11 xl:-ml-5">
                  <div>Unit 2</div>
                  <div className=" text-blue-800 font-semibold">
                    CHEMICAL BONDING
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Popup openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
        </div>
      </div>
    </>
  );
};

export default Audiobooksem1;
