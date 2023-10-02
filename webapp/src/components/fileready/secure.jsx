import Button from "../../ui/button";

const Secure = () => {
  return (
    <div id="secure" className="flex flex-col py-12 gap-y-10 text-center items-center">
      <p className="text-2xl w-[48%] font-semibold">
        To ensure the availability and privacy of your video, we recommend
        saving it to your account.
      </p>

      <Button id="work" className="text-base font-medium px-8 py-4">
        Save Video
      </Button>
      <p className="text-[#7E7E7E] text-2xl font-semibold">
        Don’t have an account?{" "}
        <span className="text-[#120B48] underline">Create account</span>
      </p>
    </div>
  );
};

export default Secure;
