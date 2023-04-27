import { useState } from "react";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const line =
    "w-5 h-[2px] bg-white rounded-full z-10 transition transform duration-300 ease my-[2px]";
  return (
    <button
      className="flex flex-col h-10 w-10 justify-center items-center"
      onClick={() => setOpen(!open)}
    >
      <div className={`${line} ${open ? "rotate-45 translate-y-2" : ""}`}></div>
      <div className={`${line} ${open ? "opacity-0" : "opacity-100"}`}></div>
      <div
        className={`${line} ${open ? "-rotate-45 -translate-y-1" : ""}`}
      ></div>
    </button>
  );
};
