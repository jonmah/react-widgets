import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import useVideos from '../hooks/useVideos'

const YouTube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, searchVideos] = useVideos('shadow tactics')

  useEffect(() => setSelectedVideo(videos[0]), [videos])

  return (
    <div className="ui container">
      <SearchBar onSubmit={searchVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onChange={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouTube
