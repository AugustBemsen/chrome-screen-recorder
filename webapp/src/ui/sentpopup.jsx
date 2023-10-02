import plane from "../assets/paper-plane.svg";
import close from "../assets/close-circle.svg";
import Modal from "../layout/modal";
import Button from "./button";

const Sentpopup = (props) => {
  return (
    <Modal>
      <div
        id="work"
        className="bg-[#F2F4F7] my-5 sent mx-auto flex flex-col gap-y-24 p-4 relative rounded-3xl"
      >
        <div className="flex flex-col gap-y-10 text-center items-center">
          <span className="space-y-4">
            <img onClick={props.onClose} className="absolute w-[30px] right-3" src={close} alt="" />
            <img className="w-[10em]" src={plane} alt="" />
          </span>

          <p className="text-xl" id="work">
            Your video link has been sent to johnmark@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-y-10">
          <div className="flex gap-y-6 flex-col items-center">
            <p className="text-center text-lg">
              Would you need to view this video later? Save to your account now!
            </p>
            <Button id="work" className="px-8 text-base py-4">
              Save Video
            </Button>
          </div>

          <div>
            <p className="text-[#7E7E7E] text-center text-base">
              Don’t have an account?{" "}
              <span className="text-[#120B48] font-semibold">
                Create account
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen" onClick={props.onClose}></div>
    </Modal>
  );
};

export default Sentpopup;
