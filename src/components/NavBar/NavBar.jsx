import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  logo,
  notification,
  greyArrow,
} from "../../assets";
import { routes,languages, settings } from "./data";
import { Link, useLocation } from "react-router-dom";
import { LanguageDropdown, SettingsDropdown, Flex,MobileNav } from "../../components";
import useClickOutside from "../../hooks/useClickOutside";
function NavBar() {
  const location = useLocation();
  const ref = useClickOutside(() => setOpen(false));
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <Flex
      flexDirection={"flex-row"}
      justifyContent={"justify-between"}
      alignItems={"items-center"}
      flexWrap={"flex-wrap"}
      gap={"gap-[10px]"}
      className="xs:px-2 px-16 bg-white shadow-lg mobile:py-4"
    >
      <div className="flex flex-row gap-2 items-center flex-wrap mobile:w-[200px]">
        <img src={logo} alt="logo-newelec" className="w-fit " />
        <div className="mobile:visible desktop:hidden">
          <SearchBar />
        </div>
      </div>

      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        className="desktop:w-[60%] mobile:w-fit"
        gap={"gap-8"}
      >
        <div className="mobile:hidden w-[46%] desktop:visible">
          <SearchBar />
        </div>
        <ul className="flex flex-row items-center gap-4 w-fit flex-wrap mobile:hidden ">
          {routes.map((element) => (
            <li key={element.path}>
              <Link to={element.path}>
                <button
                  onClick={() => setActive(!active)}
                  className={` ${
                    location.pathname === element.path
                      ? "text-textColor-blue"
                      : "text-textColor-lightGrey"
                  }`}
                >
                  {element.name}
                </button>
              </Link>
            </li>
          ))}
          <li ref={ref}>
            <button
              className="flex flex-row items-center gap-2  text-textColor-lightGrey"
              onClick={() => setOpen(!open)}
            >
              More <img src={greyArrow} alt="arrow" />
            </button>
            {open && (
              <div className="absolute top-12 bg-white p-3 rounded shadow-md">
                <div>Option 1</div>
                <div>Option 2</div>
              </div>
            )}
          </li>
        </ul>
      </Flex>

      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
        className="w-fit"
        gap={"gap-[15px]"}
      >
        <MobileNav routes={routes} />
        <img src={notification} alt="notification" className="w-[15px]" />
        <LanguageDropdown dropdownOptions={languages} />
        <SettingsDropdown dropdownOptions={settings} />
      </Flex>
    </Flex>
  );
}

export default NavBar;
