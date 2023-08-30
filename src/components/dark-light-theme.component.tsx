import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

interface DarkLightThemeProps {
    toggleTheme: boolean;
    setToggleTheme: Dispatch<SetStateAction<boolean>>;
};

export const DarkLightTheme: FC<DarkLightThemeProps> = ({toggleTheme, setToggleTheme}) => {
    useEffect(() => {
      !toggleTheme ?
        document.documentElement.classList.add("dark") :
        document.documentElement.classList.remove("dark");
    }, [toggleTheme]);
    return (
        <div className="flex justify-end pt-3">
          <button type="button" onClick={() => setToggleTheme(!toggleTheme)}>
            <FiSun className={`mx-3 dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer ${toggleTheme ? 'display-none' : ''}`} />
          </button>
          <button type="button" onClick={() => setToggleTheme(!toggleTheme)}>
            <FaMoon className={`mx-3 dark:text-white xl:text-3xl lg:text-3xl text-2xl cursor-pointer ${!toggleTheme ? 'display-none' : ''}`} />
          </button>
        </div>
    )
};