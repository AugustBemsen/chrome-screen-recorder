import logo from "../assets/logocombined-white.svg";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col p-8 sm:p-8 gap-y-8 sm:flex-row items-start lg:p-[100px]"
    >
      <img className="w-[10rem]" src={logo} alt="logo" />

      <div className="text-white gap-y-8 w-full justify-evenly flex flex-col sm:flex-row sm:items-center">
        <div className="flex flex-col gap-y-7">
          <h6>Menu</h6>
          <ul className="text-base flex flex-col gap-y-6" id="work">
            <li>Home</li>
            <li>Converter</li>
            <li>How it Works</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7">
          <h6>About us</h6>
          <ul className="text-base flex flex-col gap-y-6" id="work">
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-7">
          <h6>Screen Record</h6>
          <ul className="text-base flex flex-col gap-y-6" id="work">
            <li>Browser Window</li>
            <li>Desktop</li>
            <li>Application</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
