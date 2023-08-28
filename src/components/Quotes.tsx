export default function Quotes() {
  return (
    <>
      <div className="w-full py-32 flex flex-col justify-center items-center">
        <span className="w-10/12 sm:w-8/12 text-4xl sm:text-6xl text-orange-800">
          <i className="fa-solid fa-quote-left"></i>
        </span>
        <span className="text-center w-11/12 sm:w-8/12 sm:text-2xl text-xl my-3 text-orange-700">
          let us love one another, for love comes from God. Everyone who loves
          has been born of God and knows God. Whoever does not love does not
          know God, because God is love.
        </span>
        <span className="font-bold w-8/12 sm:w-7/12 text-2xl sm:text-4xl flex justify-end text-orange-800">
          I JOHN 4: 7 - 8
        </span>
      </div>
    </>
  );
}
