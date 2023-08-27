export default function Welcome() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 sm:px-32 sm:py-20 px-5">
        <span className="text-2xl sm:text-3xl py-5">
          Welcome to <span className="font-bold">Our Church</span>
        </span>
        <p className="text-center sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo
          beatae distinctio eligendi aliquid consequuntur quos in fuga atque
          accusamus vero illo, aspernatur blanditiis earum inventore, et itaque
          repudiandae nihil? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sequi in, nemo maxime reiciendis velit necessitatibus!
        </p>
        <button className="my-5 py-2 px-5 bg-orange-800 text-white rounded-sm transition-colors hover:bg-orange-950">
          Know More
        </button>
      </div>
    </>
  );
}
