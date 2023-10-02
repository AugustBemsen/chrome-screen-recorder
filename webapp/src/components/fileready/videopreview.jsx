import videoframe from "../../assets/videoframe.svg";
import play from "../../assets/play-pause.svg";
import volume from "../../assets/volume.svg";
import settings from "../../assets/settings.svg";

const VideoPreview = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <div className="border mx-auto w-fit rounded-lg">
        <img src={videoframe} alt="" />
        <hr className="h-[3px] bg-[#120B48] w-2/4 rounded-[24px]" />
        <div className="flex py-3.5 px-10 items-center justify-between">
          <p className="text-[#939393] text-xl" id="inter">
            0:30 / 3:00
          </p>
          <div id="work" className="flex gap-x-10 items-center">
            <span className="flex flex-col items-center gap-x-2">
              <img src={play} alt="" />
              <p className="text-xs font-medium">Play</p>
            </span>

            <span className="flex flex-col items-center gap-x-2">
              <img src={volume} alt="" />
              <p className="text-xs font-medium">Volume</p>
            </span>

            <span className="flex flex-col items-center gap-x-2">
              <img src={settings} alt="" />
              <p className="text-xs font-medium">Settings</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl font-semibold">Transcript</p>
          <select
            className="rounded text-base text-[#9D9D9D] p-2"
            name="lang"
            id="lang"
          >
            <option value="English">English</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-4">
          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate &apos;Marketplace&apos; in the left-hand menu or at the top
              of the{" "}
            </p>
          </span>

          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate &apos;Marketplace&apos; in the left-hand menu or at the top
              of the{" "}
            </p>
          </span>

          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate &apos;Marketplace&apos; in the left-hand menu or at the top
              of the{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
