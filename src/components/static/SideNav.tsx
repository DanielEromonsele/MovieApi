import { FC, useEffect, useState } from "react";
import { iSideNav } from "../../interfaces/interfaces";
import { FaAngleDown } from "react-icons/fa";

export const SideNav: FC<iSideNav> = ({
  text,
  icon,
  content,
  line,
  drop,
  onClick,
  Genre,
}) => {
  return (
    <div className={line ? "border-b pb-3" : ""}>
      <div className={content ? "mt-5" : ""}>{content ? content : ""}</div>
      <div
        onClick={onClick}
        className={`flex gap-4  mt-2 items-center py-3 rounded-md hover:text-purple-700 ${
          Genre ? "hover:bg-white text-black" : ""
        } hover:bg-purple-200 transition-all duration-300 cursor-pointer ${
          drop ? "justify-around" : ""
        }`}
      >
        <div className="flex gap-4 items-center ">
          <div className="ml-4">{icon}</div>
          <div>{text}</div>
        </div>
        {drop ? (
          <div>
            <FaAngleDown />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
