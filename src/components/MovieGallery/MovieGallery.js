import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './MovieGallery.module.css';
import movieImage from '../../images/movieImage.jpg';

const MovieGallery = ({ movies }) => {

    return (
        <>
            {movies.length > 0 && (
                <ul className={s.list}>
                    {movies.map(({ id, title, poster_path }) => (
                        <li key={id} className={s.item}>
                            <Link className={s.link} to={`/movies/${id}`}>
                            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : movieImage}
                                alt={title}
                                className={s.image}
                            />
                                <p className={s.text}>{title}</p>
                                </Link>
                        </li>
                    ))}
                </ul>
            )}
            {movies === 0 && Notiflix.Notify.info('Sorry, there is no movie')}
        </>
    );
};

MovieGallery.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
        })
    )
};

export default MovieGallery;



