import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/movie-api';
import Loader from 'components/Loader/Loader.js';
import s from './Cast.module.css';
import profileImage from '../../images/profileImage.png';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);


    useEffect(() => {        
        setStatus(STATUS.PENDING);
        getCast(movieId)
            .then(resp => {
                const newCast = resp.data.cast.map(({ id, name, profile_path, character }) => ({ id, name, profile_path, character }));
                setCast(newCast);
                setStatus(STATUS.RESOLVED)
            }).catch(error => {
                setError(error);
                setStatus(STATUS.REJECTED);
            });
    }, [movieId]);
    
    return (
        <>
            {status === STATUS.IDLE && <></>}
            {status === STATUS.PENDING && <Loader />}
            {status === STATUS.REJECTED && <h1 className={s.title}>{error}</h1>}
            {status === STATUS.RESOLVED && cast &&
                <>
                    {cast.length === 0
                        ? <h1 className={s.title}>No info. </h1>
                        : <ul className={s.list}>
                            {cast.map(({ id, name, profile_path, character }) => (
                                <li key={id} className={s.item}>
                                    <img
                                        src={profile_path? `https://image.tmdb.org/t/p/w500${profile_path}` : profileImage}
                                        alt={name}
                                        className={s.image}
                                    />
                                    <p className={s.text}>Name: {name}</p>                            
                                    <p className={s.text}>Character: {character}</p>                            
                                </li>
                            ))}
                        </ul>
                    }
                </>
            }
        </>
    );
};
