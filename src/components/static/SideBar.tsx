import { useEffect, useState } from "react";


import { useDispatch } from "react-redux";
import { getDataByGenre, getGenre } from "../../api/API";
import { SideNav } from "./SideNav";
import { addGenres } from "../../Global/ReduxState";

import { navData} from "../static/SideNavData";

export const SideBar = () => {
  const [state, setState] = useState([{}]);

  const dispatch = useDispatch();

  useEffect(() => {
    getGenre().then((res: any) => {
      console.log("fdfghjk",res);
      
      setState(res);

      // dispatch(addGenres(res));
      // getDataByGenre()
    });
  }, []);

  return (
    <div className="w-[220px] flex justify-center fixed h-[calc(100vh-70px)]  ">
      <div className=" w-[90%] overflow-y-auto ">
        {navData.map((el) => (
          <SideNav
            content={el.content}
            icon={el.icon}
            // drop={el?.drop}
            onClick={el?.onClick!} text={el.text}          />
        ))}
        {/* {state
          .map((el: any) => <SideNav content="" Genre="1" text={el.name} />)
          .slice(13)} */}

        <SideNav
          content="Genres"
          Genre="1"
          text={state
            .map((el: any) => (
              <div
                onClick={() => {
                  getDataByGenre(el.id).then((res: any) => {
                    console.log(res);

                    dispatch(addGenres(res));
                  });
                }}
                className="mb-3 hover:bg-purple-200 transition-all duration-300 w-full py-2 px-4 rounded-md"
              >
                {el.name}
              </div>
            ))
            .slice(12)}
        />
      </div>
    </div>
  );
};