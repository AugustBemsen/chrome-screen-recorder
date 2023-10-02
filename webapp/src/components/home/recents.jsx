import { recents } from "./data";
import VideoCard from "./videocard";

const Recents = () => {
  return (
    <div className="sm:px-8 bg-white mt-1 flex flex-col gap-y-6 py-10 px-4 lg:px-[100px]">
      <p id="work" className="text-lg font-medium">
        Recent files
      </p>

      <div className="grid gap-y-7 gap-x-16 sm:grid-cols-2">
        {recents.map((video) => {
          return (
            <VideoCard
              key={video.id}
              title={video.title}
              date={video.date}
              video={video.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recents;
