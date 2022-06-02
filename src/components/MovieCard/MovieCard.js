import s from './MovieCard.module.css';
import movieImage from '../../images/movieImage.jpg';

const MovieCard = ({movie}) => {
    return (
        <div className={s.wrapper}>
            <img src={movie.poster ? `https://image.tmdb.org/t/p/w500${movie.poster}` : movieImage}
                alt={movie.title}
                className={s.image}
            />
            <p><span className={s.text}>Overview:</span> { movie.overview}</p>
            <p><span className={s.text}>Popularity:</span> { movie.popularity}</p>
            <p><span className={s.text}>Tagline:</span> { movie.tagline}</p>
            <p><span className={s.text}>Vote:</span> { movie.vote}</p>
        </div>
    );
};

export default MovieCard;