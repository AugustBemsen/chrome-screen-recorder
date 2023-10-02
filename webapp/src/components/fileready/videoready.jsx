import edit from "../../assets/edit.svg";
import copy from "../../assets/copy.svg";
import facebook from "../../assets/facebookk.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";

const VideoReady = (props) => {
  return (
    <div className="text-[#141414] lg:pr-8 lg:border-r flex flex-col gap-y-10 flex-1">
      <h3 className="text-[45px] font-bold">Your video is ready!</h3>

      <div className="flex flex-col gap-y-16">
        <div>
          <label htmlFor="name">Name</label>
          <span className="flex gap-x-6 items-center">
            <p className="text-2xl text-[#413C6D] font-semibold">
              Untitled_Video_20232509{" "}
            </p>
            <img src={edit} alt="" />
          </span>
        </div>

        <div id="receiver" className="flex py-3 px-3 items-center">
          <input
            type="email"
            className="border-none w-full outline-none bg-transparent"
            name="email"
            placeholder="enter email of receiver"
            id="work"
          />
          <button onClick={props.setSent} className=" rounded-lg bg-[#605C84] text-white text-base font-medium py-2.5 px-4">
            Send
          </button>
        </div>

        <section className="flex flex-col gap-y-4">
          <p className="text-xl font-semibold">Video Url</p>
          <div className="flex rounded-2xl border-[0.5px] border-[#929292] bg-[#FAFAFA] py-3 px-3 items-center">
            <input
              type="email"
              className="border-none flex-1 w-full text-[#4B4B4B] placeholder:text-[#4B4B4B] outline-none bg-transparent"
              name="email"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
              id="work"
            />
            <button className="flex px-2.5 items-center justify-center gap-x-2 rounded-lg border-[#141414] border text-sm font-medium py-2.5">
              <img className="w-[20px]" src={copy} alt="" />
              Copy
            </button>
          </div>
        </section>

        <section>
          <p>Share your video </p>

          <div className="flex gap-x-4 items-center">
            <button className="flex items-center  justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={facebook} alt="" /> Facebook
            </button>
            <button className="flex items-center  justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={whatsapp} alt="" /> Whatsapp
            </button>
            <button className="flex items-center  justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={telegram} alt="" /> Telegram
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoReady;
