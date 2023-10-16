import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImMenu, ImCross } from "react-icons/im";
import { IoMdArrowRoundBack } from "react-icons/io";
import Screensizehook from "../components/screensizehook";
import Sidebarsmall from "./sidebarsmall";

const Breadcrum = ({ value, minibar, button }) => {
  const navigate = useNavigate();
  const screenSize = Screensizehook();
  const [openSidebar2, setOpenSidebar2] = useState(false);

  return (
    <div>
      <nav
        className="flex bg-blue-50 text-blue-700 border border-blue-200 py-3 px-5 rounded-lg justify-between"
        aria-label="Breadcrumb"
      >
        {(button === "audiobook1" ||
          button === "audiobook2" ||
          button === "ebookqus" ||
          button === "ebookans") &&
        screenSize.width < 550 ? (
          <IoMdArrowRoundBack
            className="h-7 w-7"
            onClick={() => navigate("/booksection")}
          />
        ) : (
          ""
        )}

        <div>
          {(button === "audiobook1" || button === "audiobook2") &&
          screenSize.width < 500 ? (
            <div>
              <button
                onClick={() => navigate("/audiobooksem1")}
                className={`mx-3 bg-blue-600 ${
                  button === "audiobook1" ? "bg-red-500" : ""
                } hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider`}
                type="submit"
              >
                Semester1
              </button>
              <button
                onClick={() => navigate("/audiobooksem2")}
                className={`mx-3 bg-blue-600 ${
                  button === "audiobook2" ? "bg-red-500" : ""
                } hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider`}
                type="submit"
              >
                Semester2
              </button>
            </div>
          ) : (
            ""
          )}

          {(button === "ebookqus" || button === "ebookans") &&
          screenSize.width < 550 ? (
            <div>
              <button
                onClick={() => navigate("/mcq")}
                className={`mx-3 bg-blue-600 ${
                  button === "ebookqus" ? "bg-red-500" : ""
                } hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider`}
                type="submit"
              >
                Questions
              </button>
              <button
                onClick={() => navigate("/mcqanswer")}
                className={`mx-3 bg-blue-600 ${
                  button === "ebookans" ? "bg-red-500" : ""
                } hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider`}
                type="submit"
              >
                Answers
              </button>
            </div>
          ) : (
            ""
          )}

          {screenSize.width > 550 ? (
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {value.map((item) => (
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Link
                      to={item.path}
                      className="text-blue-700 hover:text-blue-900 ml-1 md:ml-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            ""
          )}
        </div>

        {screenSize.width < 550 ? (
          <>
            {openSidebar2 ? (
              <ImCross
                onClick={() => setOpenSidebar2(false)}
                className="h-6 w-7"
              />
            ) : (
              <ImMenu
                onClick={() => setOpenSidebar2(true)}
                className="h-6 w-7"
              />
            )}
          </>
        ) : (
          ""
        )}
      </nav>
      <Sidebarsmall openSidebar2={openSidebar2} name={minibar} />
    </div>
  );
};

export default Breadcrum;
