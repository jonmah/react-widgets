import React from 'react'

const VideoDetail = ({ video }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
          title="video-player"
        />
      </div>
      <div className="ui segment">
        <div className="ui header">{video?.snippet?.title}</div>
        <p>{video?.snippet?.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
