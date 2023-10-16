import { BiSolidDashboard } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutCircleRFill, RiQuestionAnswerFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function Sidebar({ name }) {
  return (
    <div className="flex ">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="flex-1 space-y-3">
          <div className="pt-6 pb-4 space-y-3 justify-between text-sm ">
            <div>
              <div>
                <Link to="/dashboard">
                  <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                    <div
                      className={`flex items-center p-3 space-x-3 rounded-md  ${
                        name == "dashboard"
                          ? "bg-blue-600 text-white hover:text-white"
                          : "hover:text-red-700"
                      }`}
                    >
                      <BiSolidDashboard className="h-6 w-6" />
                      <div className=" font-bold">DASHBOARD</div>
                    </div>
                  </div>
                </Link>
              </div>

              {name == "audioboksem1" || name == "audioboksem2" ? (
                <div>
                  <div>
                    <Link to="/audiobooksem1">
                      <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                        <div
                          className={`flex items-center p-2 pl-8 space-x-3 rounded-md  ${
                            name == "audioboksem1"
                              ? "bg-blue-600 text-white hover:text-white"
                              : "hover:text-red-700"
                          }`}
                        >
                          <PiNumberCircleOneFill className="h-5 w-5" />
                          <div className=" font-bold">Semester 1</div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link to="/audiobooksem2">
                      <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                        <div
                          className={`flex items-center p-2 pl-8 space-x-3 rounded-md  ${
                            name == "audioboksem2"
                              ? "bg-blue-600 text-white hover:text-white"
                              : "hover:text-red-700"
                          }`}
                        >
                          <PiNumberCircleTwoFill className="h-5 w-5" />
                          <div className=" font-bold">Semester 2</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
              {name == "dashboardmcq" || name == "dashboardanswer" ? (
                <div>
                  <div>
                    <Link to="/mcq">
                      <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                        <div
                          className={`flex items-center p-2 pl-8 space-x-3 rounded-md  ${
                            name == "dashboardmcq"
                              ? "bg-blue-600 text-white hover:text-white"
                              : "hover:text-red-700"
                          }`}
                        >
                          <BsFillQuestionCircleFill className="h-5 w-5" />
                          <div className=" font-bold">Questions</div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link to="/mcqanswer">
                      <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                        <div
                          className={`flex items-center p-2 pl-8 space-x-3 rounded-md  ${
                            name == "dashboardanswer"
                              ? "bg-blue-600 text-white hover:text-white"
                              : "hover:text-red-700"
                          }`}
                        >
                          <RiQuestionAnswerFill className="h-5 w-5" />
                          <div className=" font-bold">Answers</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              <Link to="/settings">
                <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                  <div
                    className={`flex items-center p-3 space-x-3 rounded-md  ${
                      name == "settings"
                        ? "bg-blue-600 text-white hover:text-white"
                        : "hover:text-red-700"
                    }`}
                  >
                    <AiFillSetting className="h-6 w-6" />
                    <div className=" font-bold">SETTINGS</div>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link to="/">
                <div className="rounded-sm hover:bg-blue-200 hover:cursor-pointer">
                  <div
                    className={`flex items-center p-3 space-x-3 rounded-md  ${
                      name == ""
                        ? "bg-blue-600 text-white hover:text-white"
                        : "hover:text-red-700"
                    }`}
                  >
                    <RiLogoutCircleRFill className="h-6 w-6" />
                    <div className=" font-bold">LOGOUT</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
