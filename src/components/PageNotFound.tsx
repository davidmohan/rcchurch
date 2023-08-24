import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <span className="text-3xl uppercase font-bold my-4">
          404 - Page Not Found
        </span>
        <span className="my-4">
          <Link
            to={"/"}
            className="px-10 py-3 bg-transparent border-black border-2 rounded-xl text-black uppercase transition-all hover:text-white hover:bg-black"
          >
            Back to Home
          </Link>
        </span>
      </div>
    </>
  );
}
