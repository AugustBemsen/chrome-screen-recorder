import frame1 from "../../assets/frame-1.svg";
import frame2 from "../../assets/frame-2.svg";
import frame3 from "../../assets/frame-3.svg";
// import grid_blue from "../assets/grid-blue.svg";
// import grid_grey from "../assets/grid-grey.svg";

const Imagegrid = () => {
  return (
    <div className="flex-1">
      <div className="flex gap-x-1 sm:gap-x-[14px] items-center">
        <div className="flex flex-col gap-y-1 sm:gap-y-[14px]">
          <img src={frame1} alt="" />
          <img src={frame2} alt="" />
        </div>
        <div>
          <img src={frame3} alt="" />
        </div>
      </div>

      {/* <img className="absolute bottom-0" src={grid_blue} alt="" />
      <img className="absolute top-0 right-0" src={grid_grey} alt="" /> */}
    </div>
  );
};

export default Imagegrid;
