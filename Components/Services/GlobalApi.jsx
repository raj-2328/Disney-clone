import axios from 'axios';

const movieBaseurl = "https://api.themoviedb.org/3";
const api_key = 'c76c328f550df696d11da69a9da84e34';


// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

const movieByGenreBaseURL = `${movieBaseurl}/discover/movie?api_key=${api_key}`;
console.log(movieByGenreBaseURL);


// Function to get trending videos
const getTrendingVideos = () => {
  return axios.get(`${movieBaseurl}/movie/popular?api_key=${api_key}`);
};
// Function to get movies by genre ID
const getMovieByGenreId = (id) => {
 return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
  
  
};



export default {
  getTrendingVideos,
  getMovieByGenreId
};
