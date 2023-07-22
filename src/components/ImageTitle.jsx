export default function ImageTitle() {
  return (
    <div className="w-full h-[300px] bg-gray-800 flex overflow-hidden relative">
      {/* 별도 */}
      <div className="absolute z-10 w-full h-full flex justify-center">
        <div className="w-[1024px]">
          <div className="w-1/2 h-full flex flex-col justify-center space-y-4">
            <h2 className="text-white font-semibold text-xl uppercase">
              Comics
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              minus ullam magni tenetur perferendis nam veritatis rem voluptatem
              a tempore? Praesentium totam corporis dolor perspiciatis nulla
              excepturi rem, rerum doloribus.
            </p>
            <button className="w-28 text-white border border-neutral-300 rounded-sm py-2 uppercase">
              List More
            </button>
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className="w-1/2 relative">
        <div className="absolute w-full h-full bg-gray-800 -rotate-[20deg] translate-y-44 scale-[1.2]" />
      </div>
      {/* 2 */}
      <div className="w-1/2 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
          alt="background"
        />
      </div>
    </div>
  );
}
