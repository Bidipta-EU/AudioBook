import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Breadcrum from "../components/breadcrum";
import Pdfviewer from "../components/pdfviewer";
import Screensizehook from "../components/screensizehook";

const Mcqanswer = () => {
  const screenSize = Screensizehook();
  return (
    <>
      <Navbar />
      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"dashboardanswer"} />}

        <div className="w-full">
          <Breadcrum
            value={[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Book Section", path: "/booksection" },
              { name: "MCQ Answer", path: "/mcqanswer" },
            ]}
            button={"ebookans"}
            minibar={"dashboard"}
          />
          <div
            className={`grid h-screen ${
              screenSize.width > 550 ? "px-36 bg-gray-200" : ""
            } `}
          >
            <Pdfviewer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mcqanswer;
