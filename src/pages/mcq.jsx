import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Breadcrum from "../components/breadcrum";
import Pdfviewer from "../components/pdfviewer";
import Screensizehook from "../components/screensizehook";

const Mcq = () => {
  const screenSize = Screensizehook();
  return (
    <>
      <Navbar />

      <div className="flex">
        {screenSize.width < 550 ? "" : <Sidebar name={"dashboardmcq"} />}

        <div className="w-full">
          <Breadcrum
            value={[
              { name: "Dashboard", path: "/dashboard" },
              { name: "Book Section", path: "/booksection" },
              { name: "Question", path: "/mcq" },
            ]}
            button={"ebookqus"}
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

export default Mcq;
