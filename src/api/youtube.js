const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg'

const baseUrl = 'https://www.googleapis.com/youtube/v3'

const params = { key: KEY, maxResults: 5, part: 'snippet', type: 'video' }

export const search = async q => {
  const searchUrl = new URL(`${baseUrl}/search`)
  searchUrl.search = new URLSearchParams({
    ...params,
    q: q,
  })
  return await fetch(searchUrl)
}
