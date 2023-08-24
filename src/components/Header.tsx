import { useState } from "react";

export default function Header() {
  const [viewNav, setViewNav] = useState("visible");
  const [menuIcon, setMenuIcon] = useState({
    bars: "visible",
    xmark: "hidden",
  });

  return (
    <>
      <nav
        className="w-full h-screen flex flex-col justify-start items-center py-6 bg-gray-100 md:flex-row md:h-auto
      "
      >
        <div className="w-2/3 flex justify-between">
          <span className="font-bold text-xl text-orange-900">RC CHURCH</span>
          <span className="">
            <i
              className={`fa-solid fa-bars text-xl text-orange-900 cursor-pointer ${menuIcon.bars}`}
              onClick={() => {
                setViewNav("visible");
                setMenuIcon({
                  bars: "hidden",
                  xmark: "visible",
                });
              }}
            ></i>
            <i
              className={`fa-solid fa-xmark text-xl text-orange-900 cursor-pointer ${menuIcon.xmark}`}
              onClick={() => {
                setViewNav("hidden");
                setMenuIcon({
                  bars: "visible",
                  xmark: "hidden",
                });
              }}
            ></i>
          </span>
        </div>
        <div
          className={`h-screen flex flex-col justify-center items-center md:flex-row md:h-auto ${viewNav}`}
        >
          <span className="mx-5 uppercase text-orange-800 transition-all hover:text-orange-950 cursor-pointer py-4 text-xl md:text-sm md:py-2">
            Home
          </span>
          <span className="mx-5 uppercase text-orange-800 transition-all hover:text-orange-950 cursor-pointer py-4 text-xl md:text-sm md:py-2">
            About
          </span>
          <span className="mx-5 uppercase text-orange-800 transition-all hover:text-orange-950 cursor-pointer py-4 text-xl md:text-sm md:py-2">
            Priests
          </span>
          <span className="mx-5 uppercase text-orange-800 transition-all hover:text-orange-950 cursor-pointer py-4 text-xl md:text-sm md:py-2">
            Our Services
          </span>
          <span className="mx-5 uppercase text-orange-800 transition-all hover:text-orange-950 cursor-pointer py-4 text-xl md:text-sm md:py-2">
            Media
          </span>
          <span className="mx-5 uppercase text-orange-800 transition-all hover:text-orange-950 cursor-pointer py-4 text-xl md:text-sm md:py-2">
            Contact
          </span>
        </div>
      </nav>
    </>
  );
}
