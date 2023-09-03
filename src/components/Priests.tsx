export default function Priests() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-blue-200"
        id="priests"
      >
        <span className="text-blue-950 text-2xl font-bold outline-blue-500 max-sm:mb-8">
          Our Priests
        </span>
        <div className="carousel h-5/6 rounded-box w-10/12 sm:space-x-5 max-sm:space-y-5 max-sm:carousel-vertical">
          <div className="carousel-item sm:w-1/3 w-full">
            <div className="flex justify-center flex-col items-center  overflow-hidden rounded-md">
              <img
                src="https://sin5.org/images/faces/1.jpg"
                className="w-full transition duration-300 hover:scale-105 rounded-md cursor-pointer"
              />
              <span className="text-blue-900 text-xl my-5 font-bold">
                Priest Name
              </span>
            </div>
          </div>
          <div className="carousel-item sm:w-1/3  w-full">
            <div className="flex justify-center flex-col items-center  overflow-hidden rounded-md">
              <img
                src="https://sin5.org/images/faces/1.jpg"
                className="w-full transition duration-300 hover:scale-105 rounded-md cursor-pointer"
              />
              <span className="text-blue-900 text-xl my-5 font-bold">
                Priest Name
              </span>
            </div>
          </div>
          <div className="carousel-item sm:w-1/3  w-full">
            <div className="flex justify-center flex-col items-center  overflow-hidden rounded-md">
              <img
                src="https://sin5.org/images/faces/1.jpg"
                className="w-full transition duration-300 hover:scale-105 rounded-md cursor-pointer"
              />
              <span className="text-blue-900 text-xl my-5 font-bold">
                Priest Name
              </span>
            </div>
          </div>
          <div className="carousel-item sm:w-1/3  w-full">
            <div className="flex justify-center flex-col items-center  overflow-hidden rounded-md">
              <img
                src="https://sin5.org/images/faces/1.jpg"
                className="w-full transition duration-300 hover:scale-105 rounded-md cursor-pointer"
              />
              <span className="text-blue-900 text-xl my-5 font-bold">
                Priest Name
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
