import React from 'react';

const VideoListItem = ({videoName, onVideoSelect}) => { //means: const video = props.video
  const imgURL = videoName.snippet.thumbnails.default.url;
  return(
    <li onClick={()=>onVideoSelect(videoName)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src = {imgURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{videoName.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
