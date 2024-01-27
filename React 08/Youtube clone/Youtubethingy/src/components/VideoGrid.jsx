import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    id: 1,
    title: "How to learn coding in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    title: "How to learn jumping in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  },
  {
    id: 3,
    title: "How to learn running in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  },{
    id: 4,
    title: "How to learn running in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  },{
    id: 5,
    title: "How to learn running in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  },{
    id: 6,
    title: "How to learn running in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  },{
    id: 7,
    title: "How to learn running in 30 days | 30 day plan  | Code with Me",
    image: "src/assets/earn.jpeg",
    thumbImage: "src/assets/channel.jpg",
    author: "DotNames Domains",
    view: "100k",
    timestamp: "2 days ago",
  }
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {VIDEOS.map(function (video) {
        return (
          <div key={video.id}>
            <VideoCard
              id={video.id}
              title={video.title}
              image={video.image}
              thumbImage={video.thumbImage}
              author={video.author}
              view={video.view}
              timestamp={video.timestamp}
            />
          </div>
        );
      })}
    </div>
  );
};
