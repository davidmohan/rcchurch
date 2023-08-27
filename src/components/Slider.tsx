import { useState } from "react";

export default function Slider() {
  const data = [
    {
      img: "https://ik.imagekit.io/netmaze/rcchurch/slider/img1.jpg",
      caption: "Church Festival",
    },
    {
      img: "/src/assets/img/slider/img2.jpg",
      caption: "Seminar",
    },
    {
      img: "/src/assets/img/slider/img3.jpg",
      caption: "Seminar",
    },
    {
      img: "/src/assets/img/slider/img4.jpg",
      caption: "Travelling",
    },
  ];
  const [count, setCount] = useState(0);
  const countIncrement = () => {
    if (count < data.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  const countDecrement = () => {
    if (count != 0) {
      setCount(count - 1);
    } else {
      setCount(data.length - 1);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center sm:py-6">
        <div className="w-full  sm:w-3/4 relative  sm:rounded-xl sm:overflow-hidden">
          <img
            src={data[count].img}
            className="w-full brightness-75"
            alt={data[count].caption}
          />
          <span className="absolute left-10 top-1/2 -translate-y-1/2 cursor-pointer text-white">
            <i
              className="fa-solid fa-chevron-left sm:text-xl"
              onClick={countDecrement}
            ></i>
          </span>
          <span className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer text-white">
            <i
              className="fa-solid fa-chevron-right sm:text-xl"
              onClick={countIncrement}
            ></i>
          </span>
          <span className="absolute bottom-5 sm:bottom-20 left-1/2 -translate-x-1/2 text-white">
            {data[count].caption}
          </span>
        </div>
      </div>
    </>
  );
}
