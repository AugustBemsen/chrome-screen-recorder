import Button from "../../ui/button";
import arrow from "../../assets/arrow-right.svg";
import Imagegrid from "./imagegrid";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-y-6 sm:flex-row px-4 py-20 bg-white mt-1 sm:px-8 sm:py-20 lg:p-[100px] gap-x-8 justify-center mx-auto items-center">
      <div className="flex-1 flex flex-col gap-y-6 lg:gap-y-12">
        <div className="flex flex-col">
          <h1 className="text-[#141414] leading-[64px] text-2xl font-bold sm:text-[42px] lg:text-[48px] xl:text-[64px]">
            Show Them Don’t Just Tell
          </h1>
          <p id="inter" className="text-base leading-7">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>

        <Button className="text-sm sm:text-lg w-fit font-medium flex items-center gap-x-3 p-4 sm:p-[22px]">
          Install HelpMeOut <img src={arrow} alt="" />
        </Button>
      </div>

      <Imagegrid />
    </div>
  );
};

export default Hero;
