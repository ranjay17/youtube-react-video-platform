import { useEffect, useState } from 'react'
import axios from "axios";
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const[videos, setVideos] = useState([])
  useEffect(()=>{
    fetchVideos()
  },[])

  const fetchVideos = async() =>{
    try {
      const response = await axios.get(YOUTUBE_VIDEO_API);
      setVideos(response.data.items)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-wrap'>
      {videos.length === 0
        ? "No Videos Found"
        : videos.map((video) => <VideoCard key={video.id} info={video} />)}
    </div>
  );
}

export default VideoContainer