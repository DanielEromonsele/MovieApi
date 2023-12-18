import { IoMenuSharp, IoSettings } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { PiGraphLight } from "react-icons/pi";
import { MdNotifications } from "react-icons/md";
import { Icon } from "./HeaderIcon";
import { useState } from "react";

export const Header = () => {
  const [first, setfirst] = useState(false);
  const onStateChange = () => {
    setfirst(!first);
  };

  return (
    <div className=" sticky top-0 z-20 bg-white h-[70px] w-full border-b flex items-center justify-center ">
      <div className="w-[95%] flex items-center justify-between ">
        <div className="flex items-center ">
          <div className="flex w-[200px] items-center justify-between mr-2 ">
            <div className="text-[30px]">Logo</div>
            <Icon icon={<IoMenuSharp />} onClick={onStateChange} />
          </div>
          <div>
            <div className="flex items-center border h-[45px] px-2 w-[500px] rounded-md  ">
              <Icon icon={<FaSearch />} bg="1" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full h-[90%] "
              />
              <Icon icon={<PiGraphLight />} />
            </div>
          </div>
        </div>

        <div className="flex  items-center gap-5">
          <div>
            <Icon icon={<MdNotifications />} />
          </div>
          <div className="flex items-center px-2 cursor-pointer transition-all duration-300 justify-between rounded-full p-1 w-[100px] min-h-[40px] bg-blue-50 hover:bg-blue-500 group ">
            <img
              src=""
              alt=""
              className="w-10  h-10 rounded-full border bg-green-500 "
            />
            <Icon icon={<IoSettings />} bg2="1" />
          </div>
        </div>
      </div>
    </div>
  );
};