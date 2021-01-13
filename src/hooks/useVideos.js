import { useEffect, useState } from 'react'

import { search } from '../api/youtube'

const useVideos = q => {
  const [videos, setVideos] = useState([])

  const searchVideos = async term => {
    const json = await search(term).then(r => r.json())
    setVideos(json.items)
  }

  useEffect(() => {
    searchVideos(q)
  }, [q])

  return [videos, searchVideos]
}

export default useVideos
