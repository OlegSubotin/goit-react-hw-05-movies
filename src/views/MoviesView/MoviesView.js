import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import SearchBar from 'components/SearchBar';
import { getSearchMovie } from '../../services/movie-api';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader/Loader.js';
import s from './MoviesView.module.css';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

export default function MovieView() {
    const [, setQuery] = useState('');
    const [status, setStatus] = useState(STATUS.IDLE);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if (searchParams.get('query') !== null) {
            const newQuery = searchParams.get('query');
            setStatus(STATUS.PENDING);
        getSearchMovie(newQuery)
            .then(resp => {
                const newMovies = resp.data.results.map(({ id, poster_path, title }) => ({ id, poster_path, title, }));
                setMovies(newMovies);
                setStatus(STATUS.RESOLVED)
                resetForm();
            }).catch(error => {
                setError(error);
                setStatus(STATUS.REJECTED);
            });
        };
    }, [searchParams]);

    function resetForm (){
        setQuery('');
    };

    function handleQueryChange(e) {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    function handleFormSubmit(e) {
        e.preventDefault();

        const newQuery = e.target.elements.query.value.toLowerCase();

        if (newQuery.trim() === "") {
            Notiflix.Notify.info('Put a movie');
            return;
        };

        setSearchParams({ query: newQuery });
    };  
    
    return (
        <>
            <SearchBar onSubmit={handleFormSubmit} onChange={handleQueryChange}/>
            {status === STATUS.IDLE && <h1 className={s.title}>We can find any movie you want </h1>}
            {status === STATUS.PENDING && <Loader />}
            {status === STATUS.REJECTED && <h1 className={s.title}>{error}</h1>}
            {status === STATUS.RESOLVED && movies &&
                <>                    
                    {movies.length === 0
                        ? <h1 className={s.title}>Your movie is very specific </h1>
                        : <><h1 className={s.title}>We've found for you:</h1><MovieGallery movies={movies} /></>
                    }
                </>
            }
        </>
    );
};
