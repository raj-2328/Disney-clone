import React, { useEffect, useState } from 'react';
import GlobalApi from './Services/GlobalApi';
import MovieCard from './MovieCard';

const MovieList = ({ genreId }) => {
  const [moveList, setMovieList] = useState([]);

  const getMovieByGenreId = async () => {
    try {
      const resp = await GlobalApi.getMovieByGenreId(genreId);
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {moveList.map((item, index) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
