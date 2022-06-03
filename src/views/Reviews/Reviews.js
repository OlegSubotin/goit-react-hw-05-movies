import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/movie-api';
import Loader from 'components/Loader/Loader.js';
import s from './Reviews.module.css';


const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

export default function Cast() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);


    useEffect(() => {        
        setStatus(STATUS.PENDING);
        getReviews(movieId)
            .then(resp => {
                const newCast = resp.data.results.map(({ id, author, content, created_at }) => ({ id, author, content, created_at }));
                setReviews(newCast);
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
            {status === STATUS.RESOLVED && reviews &&
                <>
                    {reviews.length === 0
                        ? <h1 className={s.title}>No info. </h1>
                        : <ul className={s.list}>
                            {reviews.map(({ id, author, content, created_at }) => (
                                <li key={id} className={s.item}>
                                    <p className={s.text}>Author: {author}</p>   
                                    <p className={s.text}>Content: {content}</p>   
                                    <p className={s.text}>Date: {created_at}</p>                           
                                </li>
                            ))}
                        </ul>
                    }
                </>
            }
        </>
    );
};
