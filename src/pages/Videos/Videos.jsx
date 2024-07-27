import React from "react";
import './Videos.css'
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recommanded from "../../components/Recommanded/Recommanded";
import { useParams } from "react-router-dom";

const Videos = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId}/>
      <Recommanded categoryId={categoryId}/>
    </div>
  )
}

export default Videos