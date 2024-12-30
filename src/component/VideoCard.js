const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount } = statistics; // Corrected to match the API response
  
    return (
      <div className="p-3 m-3 w-72 h-80 bg-blue-50 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
        <img
          className="rounded-lg w-full h-40 object-cover"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <ul className="mt-2 space-y-1 text-sm">
          {/* Boss Title with Light Blue */}
          <li className="font-extrabold text-xl text-lightBlue-600 truncate">{title}</li>
  
          {/* Channel Name in Bold Light Blue, slightly smaller */}
          <li className="font-bold text-base text-lightBlue-500 truncate">{channelTitle}</li>
  
          {/* Views with Light Blue text */}
          <li className="text-sm text-lightBlue-400">{viewCount} views</li>
        </ul>
      </div>
    );
  };
  
  const RedBorderVideoCard = ({ info }) => {
    return (
      <div className="p-1 m-1 border border-red-600 rounded-lg">
        <VideoCard info={info} />
      </div>
    );
  };
  
  export default VideoCard;
  