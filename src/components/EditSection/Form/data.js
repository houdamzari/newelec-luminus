import { security, icon } from "../../../assets";
export const FirstForm = [
  {
    label: "Category",
    width: "w-[30%]",
    addNewAvailable: true,
    data: [
      { icon: security, option: "Safety" },
      { icon: security, option: "Something" },
    ],
  },
  {
    label: "Topic",
    width: "w-[45%]",
    addNewAvailable: true,
    data: [
      { icon: icon, option: "VCA" },
      { icon: icon, option: "BSAA" },
    ],
  },
  {
    label: "Valid For",
    width: "w-[20%]",
    addNewAvailable: false,
    data: [{ option: "1 year" }, { option: "2 years" }],
  },
];
