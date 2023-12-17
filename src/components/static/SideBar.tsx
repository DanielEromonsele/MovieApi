import { useRef, useState } from "react";

import { navData } from "./SideNavData";
import { SideNav } from "./SideNav";
import { Nav } from "./DropDown";

const SideBar = () => {
  const [state, setState] = useState<boolean>(false);
  const parent = useRef(null);

  return (
    <div ref={parent} className="w-[220px]  fixed h-screen flex justify-center">
      <div className="bg-white w-[90%]">
        <div className="border-b "></div>
        <div className="border-b py-3 "></div>

        {navData.map((props: any) => (
          <SideNav
            icon={props.icon}
            text={props.text}
            onClick={props?.onClick}
          />
        ))}
        {state && (
          <div>
            <Nav text="Tabler" />
            <Nav text="Tabler" />
            <Nav text="Tabler" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
