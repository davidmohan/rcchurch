import { useState } from "react";

export default function Header() {
  const [smNav, setSmNav] = useState(false);
  return (
    <>
      <div
        className="sm:flex sm:justify-center sm:items-center sm:py-6 hidden sm:block bg-gray-200"
        id="home"
      >
        <a
          href={"#home"}
          className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
        >
          Home
        </a>
        <a
          href={"#welcome"}
          className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
        >
          About
        </a>
        <a
          className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
          href={"#priests"}
        >
          Priests
        </a>
        <a
          className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
          href={"#events"}
        >
          Our Services
        </a>
        <a
          className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
          href={"#media"}
        >
          Media
        </a>
        <a
          className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
          href={"#footer"}
        >
          Contact
        </a>
      </div>
      <div className="sm:hidden flex-col justify-center w-full relative">
        <div className="flex justify-around w-full bg-gray-200 py-5">
          <span className="text-orange-800 uppercase text-xl font-bold">
            RC Church
          </span>
          <span className="text-orange-800 text-xl cursor-pointer">
            <i
              className={"fa-solid fa-bars " + (smNav ? "hidden" : "block")}
              onClick={() => {
                setSmNav(!smNav);
              }}
            ></i>
            <i
              className={"fa-solid fa-xmark " + (!smNav ? "hidden" : "block")}
              onClick={() => {
                setSmNav(!smNav);
              }}
            ></i>
          </span>
        </div>
        <div
          className={
            "flex flex-col items-center py-8 bg-white w-full " +
            (smNav ? "block" : "hidden")
          }
        >
          <div className="flex flex-col items-center py-8">
            <a
              className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
              href="#home"
            >
              Home
            </a>
            <a
              className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
              href="#welcome"
            >
              About
            </a>
            <a
              className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
              href="#priests"
            >
              Priests
            </a>
            <a
              className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
              href="#events"
            >
              Our Services
            </a>
            <a
              className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
              href="#media"
            >
              Media
            </a>
            <a
              className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all"
              href="#footer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
