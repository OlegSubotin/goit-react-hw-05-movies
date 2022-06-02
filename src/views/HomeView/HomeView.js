import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movie-api';
import Loader from 'components/Loader/Loader.js';
import MovieGallery from 'components/MovieGallery';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

    useEffect(() => {
        setStatus(STATUS.PENDING);
        getTrendingMovies()
            .then(resp => {
            const newMovies = resp.data.results.map(({ id, poster_path, title }) => ({
                id,
                poster_path,
                title,
            }));
            setMovies(newMovies);
            setStatus(STATUS.RESOLVED)
        }).catch(error=>{
            setError(error);
            setStatus('rejected');
        });    
    }, []);

  return (
    <>
      {status === STATUS.IDLE && <></>}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <h1>{error}</h1>}
      {status === STATUS.RESOLVED && movies && <MovieGallery movies={movies} />}
    </>
  );
};