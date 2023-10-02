import { Link } from "react-router-dom";
import logo from "../../assets/logocombined.svg";

const Header = () => {
  return (
    <header className="flex bg-white py-[22px] px-4 sm:px-8 lg:px-[100px] items-center justify-between">
      <div>
        <Link to={`/`}>
          <img className="w-3/4" src={logo} alt="help-me-out-logo" />
        </Link>
      </div>

      <div
        id="work"
        className="flex text-base font-medium items-center gap-x-10"
      >
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">How It Works</p>
      </div>

      <div>
        <Link to={`/login`}>
          <p className="text-lg font-semibold">Get Started</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
