import logo from "../../src/assets/logocombined.svg";
import arrow from "../../src/assets/arrow-down.svg";
import pfp from "../../src/assets/profile-circle.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex bg-white py-[22px] px-4 sm:px-8 lg:px-[100px] items-center justify-between">
      <div className="">
        <Link to={`/`}> <img className="w-3/4" src={logo} alt="help-me-out-logo" /></Link>
       
      </div>


      <div className="flex gap-x-2 items-center">
        <img src={pfp} alt="" />
        <p id="work" className="text-base">
          John Mark
        </p>
        <img src={arrow} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
