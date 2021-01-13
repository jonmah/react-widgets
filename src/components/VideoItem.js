import React from 'react'

const VideoItem = ({ onClick, video }) => (
  <div
    className="item"
    onClick={() => onClick(video)}
    style={{ alignItems: 'center', cursor: 'pointer', display: 'flex' }}
  >
    <img
      alt={video.snippet.title}
      className="ui image"
      src={video.snippet.thumbnails.medium.url}
      style={{ maxWidth: '180px' }}
    />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
)

export default VideoItem
