import Secure from "./secure";
import VideoPreview from "./videopreview";
import VideoReady from "./videoready";

const Ready = (props) => {
  return (
    <>
      <div className="pb-12 bg-white">
        <div className="flex flex-col items-center gap-y-10 lg:items-start lg:flex-row sm:px-8 lg:px-[90px] py-10 gap-x-8 justify-center mx-auto">
          <VideoReady setSent={props.setSent} />
          <VideoPreview />
        </div>

        <Secure />
      </div>
    </>
  );
};

export default Ready;
