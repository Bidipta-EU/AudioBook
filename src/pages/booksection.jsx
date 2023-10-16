import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Breadcrum from "../components/breadcrum";
import { useNavigate } from "react-router-dom";
import mcq from "../images/mcq.png";
import audiobook from "../images/audiobook.jpg";
import Screensizehook from "../components/screensizehook";

const Booksection = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  return (
    <>
      <Navbar />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"dashboard"} />}
        <div className="w-full">
          <Breadcrum
            value={[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Book Section", path: "/booksection" },
            ]}
            minibar={"dashboard"}
          />
          <div className="grid  gap-14 px-24 lg:grid-cols-2 py-12 bg-gray-200 h-screen">
            <div onClick={() => navigate("/mcq")}>
              <img
                className="w-full  rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src={mcq}
                alt="MCQ"
              />
            </div>
            <div onClick={() => navigate("/audiobooksem1")}>
              <img
                className="w-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src={audiobook}
                alt="Audio Book"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booksection;
