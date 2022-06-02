import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from "services/movie-api";
import MovieCard from "components/MovieCard";
import Loader from "components/Loader/Loader.js";

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

export default function MovieDetailView() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovieById(movieId).then(
            ({ data: {
                id,
                original_title,
                overview,
                popularity,
                poster_path,
                vote_average,
                tagline
            },
            }) => {
                const movieDetails = {
                    id:id,
                    title: original_title,
                    overview: overview,
                    popularity: popularity,
                    poster: poster_path,
                    tagline: tagline,
                    vote: vote_average,
                };
                setMovie(movieDetails);
                setStatus(STATUS.RESOLVED);
            }
        ).catch(error => {
            setError(error);
            setStatus(STATUS.REJECTED);
        });
    }, [movieId]);

    return (
        <>
            {status === STATUS.IDLE && <></>}
            {status === STATUS.PENDING && <Loader />}
            {status === STATUS.REJECTED && <h1>{error}</h1>}
            {status === STATUS.RESOLVED && movie && <MovieCard movie={movie} />}
        </>
    );
};




