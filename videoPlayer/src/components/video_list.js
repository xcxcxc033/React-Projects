import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        videoName = {video}
      />);
  });

  return (
    <ul className="col-md-4 list-group">
      {videItems}
    </ul>
  );
};

export default VideoList;
