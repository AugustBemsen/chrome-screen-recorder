import logo from "../../src/assets/logocombined.svg";
import Login from "../components/login";

const Signin = () => {
  return (
    <div
      id="inter"
      className="bg-white h-full px-4 sm:px-8 lg:px-[100px] flex flex-col gap-y-12 py-20 "
    >
      <img className="w-[11rem]" src={logo} alt="" />

      <div className="flex flex-col gap-y-6 w-fit mx-auto justify-center sm:items-center">
        <div className="flex flex-col items-center text-center gap-y-2">
          <h1 id="inter" className="text-[#141414] text-[32px] font-bold">
            Log in or Sign up
          </h1>
          <p className="text-[#434343] text-center w-[70%] text-sm ">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>

        <Login />
      </div>
    </div>
  );
};

export default Signin;
