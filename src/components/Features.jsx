export default function Features() {
  return (
    <div className="w-[1024px] py-16 flex space-x-4">
      {Array(3)
        .fill("")
        .map((_, i) => (
          <div className="w-1/3 aspect-video" key={i}>
            <div className="w-full h-full border border-neutral-300 flex flex-col rounded-md p-4 justify-between">
              <div>
                <h2 className=" uppercase text-xl font-semibold">
                  customoer dashboard
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione
                </p>
              </div>
              <button className="w-28 py-2 rounded-lg  border border-neutral-300 transition-all duration-300 hover:bg-neutral-300 hover:text-white ">
                View Here
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
