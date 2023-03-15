import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { logo, notification, germany, english, nederlands, spain, france, settingsIcon, policies, greyArrow } from '../../assets'
import { Link,useLocation } from "react-router-dom";

import useClickOutside from "../../hooks/useClickOutside";
function Navbar() {
  const location = useLocation();
  const ref = useClickOutside(()=> setOpen(false))
  
  const  [open, setOpen] = useState(false);
  const  [active, setActive] = useState(false);
  const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/",
      name: "Trainings",
    },
    {
      path: "/users",
      name: "Users",
    },
  ];
  return (
    <Flex
      flexDirection={"flex-row"}
      justifyContent={"justify-between"}
      alignItems={"items-center"}
      gap={"gap-[10px]"}
      className=" px-16"
    >
      <img src={logo} alt="logo-newelec" className="w-fit " />

      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        className="w-[60%]"
        gap={"gap-8"}
      >
        <SearchBar />
         <ul className="flex flex-row items-center gap-4 w-fit ">
          {routes.map(element => (<li key={element}><Link to={element.path}><button onClick={() => setActive(!active)} className={` ${location.pathname === element.path ? 'text-textColor-blue' : 'text-textColor-lightGrey'}`} >{element.name}</button></Link></li>))}
        <li ref={ref}>
          <button className="flex flex-row items-center gap-2  text-textColor-lightGrey" onClick={()=>setOpen(!open)}>More <img src={greyArrow} alt="arrow"  /></button>
         {open && <div className="absolute top-12 bg-white p-3 rounded shadow-md">
            <div>Option 1</div>
            <div>Option 2</div>
          </div>}
</li>
      </ul>
      </Flex>

      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
        gap={"gap-[15px]"}
      >
        <img src={notification} alt="notification" className="w-6" />
       
      </Flex>
    </Flex>
  );
}