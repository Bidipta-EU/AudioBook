import eupheusLogo from "..//images/eupheus-logo.png";
function Navbar() {
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200">
            <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
              <div>
                <img
                  width="160px"
                  height="160px"
                  src={eupheusLogo}
                  alt="Eupheus Logo"
                />
              </div>
              <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                <div className="justify-center items-center flex relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEk1VrJgLej1T-96-XJ6ZkyMOhn5qXlYh4W-GB10R7cDMDTQbYRIodMSEXvtXClsv0sI&usqp=CAU"
                    className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                    alt="profile"
                  />
                  <p className="font-semibold text-sm">Cartoon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
