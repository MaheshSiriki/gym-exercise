
export const exerciseOptions = {
    method: 'GET',
    // headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    //   'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    // }
    headers: {
        'X-RapidAPI-Key': '9c85f48b4amsh2d87ebddb4bcdcep17d0f0jsnc7599e702e34',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  };

  export const youtubeOptions = {
    method: 'GET',
    // headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    //   'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    // }
    headers: {
        'X-RapidAPI-Key': '9c85f48b4amsh2d87ebddb4bcdcep17d0f0jsnc7599e702e34',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
  };



export const fetchedData = async (url,options) => {
    const response=await fetch(url,options)
    const data=await response.json()
    return data
}