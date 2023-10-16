import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Screensizehook from "../components/screensizehook";

const Popup = ({ openPopUp, closePopUp }) => {
  const screenSize = Screensizehook();
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="flex flex-col  overflow-auto bg-white w-[80%] h-[90%] shadow-inner border-e-emerald-600 rounded-lg">
        <div className="flex justify-between p-6 bg-blue-100">
          <div className="font-bold text-lg">Unit 0: INTRODUCTION</div>
          <button
            onClick={() => closePopUp()}
            className="text-white bg-red-500 h-10 w-20 font-bold rounded-md"
            type="button"
          >
            CLOSE
          </button>
        </div>
        <div>
          <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div
                className={` ${
                  screenSize.width > 900 ? "flex" : ""
                } items-center space-x-4 px-8`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    1. TESTING THE VIEW OF THIS PLAYER
                  </p>
                </div>

                <ReactAudioPlayer
                  src="https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3"
                  autoPlay
                  controls
                  className={`${screenSize.width > 900 ? "w-1/2" : "w-full"}`}
                />
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div
                className={` ${
                  screenSize.width > 900 ? "flex" : ""
                } items-center space-x-4 px-8`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    2. CHEMICAL BONDING
                  </p>
                </div>
                <ReactAudioPlayer
                  src="https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3"
                  autoPlay
                  controls
                  className={`${screenSize.width > 900 ? "w-1/2" : "w-full"}`}
                />
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div
                className={` ${
                  screenSize.width > 900 ? "flex" : ""
                } items-center space-x-4 px-8`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    3. STUDY OF ACIDS BASES AND SALTS
                  </p>
                </div>
                <ReactAudioPlayer
                  src="https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3"
                  autoPlay
                  controls
                  className={`${screenSize.width > 900 ? "w-1/2" : "w-full"}`}
                />
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div
                className={` ${
                  screenSize.width > 900 ? "flex" : ""
                } items-center space-x-4 px-8`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    4. PERIODIC PROPERTIES AND VARIATION OF PROPERTIES PERIODIC
                  </p>
                </div>
                <ReactAudioPlayer
                  src="https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3"
                  autoPlay
                  controls
                  className={`${screenSize.width > 900 ? "w-1/2" : "w-full"}`}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
