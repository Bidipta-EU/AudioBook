import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import Breadcrum from "../components/breadcrum";
import Screensizehook from "../components/screensizehook";

const Dashboard = () => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();

  return (
    <>
      <Navbar />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"dashboard"} />}

        <div className="w-full">
          <Breadcrum
            value={[{ name: "Dashboard", path: "/dashboard" }]}
            minibar={"dashboard"}
          />
          <div className="grid grid-cols-1 gap-14 px-24 lg:grid-cols-3 py-12 bg-gray-200 h-full">
            <div onClick={() => navigate("/booksection")}>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-sm shadow hover:cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://skool.ai/audeubook-stage/users/book/book1.png"
                alt="no image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
