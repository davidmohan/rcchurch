import { useState } from "react";

export default function Header() {
  const [smNav, setSmNav] = useState(false);
  return (
    <>
      <div className="sm:flex sm:justify-center sm:items-center sm:py-5 hidden sm:block bg-gray-200">
        <span className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
          Home
        </span>
        <span className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
          About
        </span>
        <span className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
          Priests
        </span>
        <span className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
          Our Services
        </span>
        <span className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
          Media
        </span>
        <span className="px-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
          Contact
        </span>
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
            <span className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
              Home
            </span>
            <span className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
              About
            </span>
            <span className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
              Priests
            </span>
            <span className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
              Our Services
            </span>
            <span className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
              Media
            </span>
            <span className="px-3 py-3 uppercase text-orange-800 hover:text-orange-950 cursor-pointer transition-all">
              Contact
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
