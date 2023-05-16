import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './MovieList.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <p className="card-text">
          <small className="text-muted">Release Date: {movie.release_date}</small>
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/movie');
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1>Movie Database App</h1>
      <div className="row">
        {movies?.map((movie) => (
          <div className="col-lg-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
