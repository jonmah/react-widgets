import React, { useEffect, useState } from 'react'

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import { search } from '../api/youtube'

const YouTube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, setVideos] = useState([])

  const handleSubmit = async term => {
    const response = await search(term)
    const json = await response.json()
    setSelectedVideo(json.items[0])
    setVideos(json.items)
  }

  useEffect(() => {
    handleSubmit('buildings')
  }, [])

  const handleSelectVideo = video => setSelectedVideo(video)

  return (
    <div className="ui container">
      <SearchBar onSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouTube
