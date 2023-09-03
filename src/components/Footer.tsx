export default function Footer() {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-full bg-orange-950 text-white flex max-sm:flex-col py-10 sm:py-20 px-10 justify-between">
        <div className="flex flex-col space-y-5 max-sm:py-10 sm:w-1/3">
          <span className="text-2xl font-bold">Contact Details</span>
          <div className="flex flex-col">
            <span>Person 1 Name</span>
            <span>Position</span>
            <span>+91 00000 00000</span>
            <span>email@email.com</span>
          </div>
        </div>
        <div className="hidden sm:block w-1/3">
          <span className="text-2xl font-bold">Quick Links</span>
          <div className="flex flex-col py-5 px-5">
            <ul className="space-y-3">
              <li className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:pl-3">
                <i className="fa-solid fa-arrow-right pr-3"></i>
                <span>Home</span>
              </li>
              <li className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:pl-3">
                <i className="fa-solid fa-arrow-right pr-3"></i>
                <span>About</span>
              </li>
              <li className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:pl-3">
                <i className="fa-solid fa-arrow-right pr-3"></i>
                <span>Priests</span>
              </li>
              <li className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:pl-3">
                <i className="fa-solid fa-arrow-right pr-3"></i>
                <span>Our Services</span>
              </li>
              <li className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:pl-3">
                <i className="fa-solid fa-arrow-right pr-3"></i>
                <span>Media</span>
              </li>
              <li className="transition-all duration-300 cursor-pointer hover:text-orange-200 hover:pl-3">
                <i className="fa-solid fa-arrow-right pr-3"></i>
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center max-sm:py-10 w-full sm:w-1/2">
          <span className="text-2xl font-bold">Contact Form</span>
          <form className="flex flex-col items-center space-y-3 py-5 w-11/12">
            <input
              type="text"
              className="bg-transparent py-3 px-5 border-2 border-orange-400 rounded-xl placeholder-orange-300 transition duration-300 hover:border-white focus:outline-none focus:border-white w-full"
              placeholder="Name *"
            />
            <input
              type="email"
              className="bg-transparent py-3 px-5 border-2 border-orange-400 rounded-xl placeholder-orange-300 transition duration-300 hover:border-white focus:outline-none focus:border-white w-full"
              placeholder="Email Address *"
            />
            <input
              type="number"
              className="bg-transparent py-3 px-5 border-2 border-orange-400 rounded-xl placeholder-orange-300 transition duration-300 hover:border-white focus:outline-none focus:border-white w-full"
              placeholder="Phone Number *"
            />
            <textarea
              className="bg-transparent py-3 px-5 border-2 border-orange-400 rounded-xl placeholder-orange-300 transition duration-300 hover:border-white focus:outline-none focus:border-white w-full"
              placeholder="Message *"
            ></textarea>
            <button
              className="btn hover:btn-warning w-full"
              onClick={(e: any) => onSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
