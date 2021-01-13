import React from 'react'

import VideoItem from './VideoItem'

const VideoList = ({ onChange, videos }) => (
  <div className="ui relaxed divided list">
    {videos.map(v => (
      <VideoItem key={v?.id?.videoId} onClick={onChange} video={v} />
    ))}
  </div>
)

export default VideoList
