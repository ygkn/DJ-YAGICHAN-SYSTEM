import React from 'react';
import VideoListItem from './VideoListItem';

export const VideoList = ({lists}) => (
  <ul>
    {lists.map(video => <VideoListItem videoInfo={video} />)}
  </ul> )
