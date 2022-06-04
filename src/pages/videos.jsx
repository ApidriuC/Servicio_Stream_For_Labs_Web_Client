import React from "react";
import { Player } from "video-react";
import { onSort } from '../util/sort'
import WithMessage from "../hocs/withMessage";
import WithAppLayout from "../layouts/appLayout";
import FileComponent from "../components/file";
import { useState } from "react";

const Videos = () => {
  

  const  [videos, SetVideos] = useState([{_id: "60371bda41ae1b7e6526d746",
  author: "Pepito Pérez",
 name: "AVide.png",
 path:  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
 shared_users:[],
 upload_at: "2022-02-25T03:39:06.955Z",
 weight: 23094
 }, {
   _id: "60371d7e41ae1b7e6526d747",
    author: "Pepito Pérez",
   name: "BVide.png",
   path:  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
   shared_users:[],
   upload_at: "2021-02-25T03:39:06.955Z",
   weight: 23094
 }])
    
    const handleSort = async  (typeSort) => {
      const sortFiles = await onSort(typeSort, [...videos])
      SetVideos(sortFiles)
    }

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleSelecFile = (fileSelected) => {
    setCurrentVideo(fileSelected);
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-center mt-2">
      <Player
        autoPlay={videos[0].path !== currentVideo.path}
        fluid = {false}
        width = {window.screen.width*0.7}
        height={window.screen.height*0.5}
        playsInline
        poster="/images/video_placeholder.png"
        src={currentVideo.path}
      />
      </div>
      <h4 className="my-1 text-center mx-2">{currentVideo.name}</h4>
      <p className="text-muted text-center">Play list</p>
      <FileComponent
        loading={false}
        files={videos}
        onSelectedFile={handleSelecFile}
        onSort={handleSort}
      />
    </>
  );
};

export default WithMessage(WithAppLayout(Videos));
