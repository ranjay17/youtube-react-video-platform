import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const {channelTitle, thumbnails, title} = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img alt="thumbnails" className="rounded-lg" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  ); 
};

export default VideoCard;
