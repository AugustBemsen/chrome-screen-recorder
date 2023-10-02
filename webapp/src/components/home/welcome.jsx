import search from "../../assets/search-normal.svg";

const Welcome = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-[100px] bg-white py-10">
      <div className="flex flex-col-reverse gap-y-6 sm:flex-row justify-between">
        <span className="flex-1">
          <h4 className="font-bold text-[32px]">Hello, John Mark</h4>
          <p id="work" className="text-lg">
            Here are your recorded videos
          </p>
        </span>

        <div className=""></div>

        <span className="flex flex-1 w-full sm:w-[40%] search gap-x-4 p-7 items-center">
          <img src={search} alt="" />
          <input
            type="search"
            id="work"
            placeholder="Search for a particular video"
            className="bg-transparent w-full outline-none text-sm border-none"
            name="search"
          />
        </span>
      </div>
    </section>
  );
};

export default Welcome;
