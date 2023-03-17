
import {
  germany,
  english,
  nederlands,
  spain,
  france,
  settingsIcon,
  policies,
} from "../../assets";
export const languages = [
    { icon: english, name: "English(EN)" },
    { icon: france, name: "Francais(FR)" },
    { icon: nederlands, name: "Nederlands(NL)" },
    { icon: spain, name: "Espanol(ES)" },
    { icon: germany, name: "Deutsch(DE)" },
  ];
  export const settings = [
    { icon: settingsIcon, name: "Profile settings" },
    { icon: policies, name: "Our policies" },
];
  
 export const routes = [
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