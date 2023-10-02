import { how } from "./data";

const How = () => {
  return (
    <div className="bg-white flex flex-col gap-y-[60px] p-4 sm:p-8 lg:p-[100px]">
      {" "}
      <h3 className="text-[#141414] text-center place-items-stretch text-[40px] font-bold">
        How it works
      </h3>
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6 lg:gap-x-20 mx-auto items-center">
        {how.map((step) => {
          return (
            <div className="flex gap-y-8 flex-col items-center" key={step.id}>
              <img src={step.step} alt="" />

              <span className="text-center flex flex-col gap-y-4">
                <h3 className="text-[#1B233D] text-xl xl:text-[24px] font-semibold">
                  {step.title}
                </h3>
                <p className="text-[#616163] sm:text-[18px]" id="work">
                  {step.desc}
                </p>
              </span>

              <img src={step.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default How;
