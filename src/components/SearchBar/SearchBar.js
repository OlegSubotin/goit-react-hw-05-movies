import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import s from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    function handleQueryChange(e) {
        setQuery(e.currentTarget.value.toLowerCase());
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (query.trim() === '') {
            Notiflix.Notify.info('Put a movie name you are looking for');
            return;
        };

        onSubmit(query);
        setQuery('');
    };

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    value={query}
                    onChange={handleQueryChange}
                />
                <button className={s.button}>
                    <span className={s.buttonLabel}> <BsSearch fill='#00008b' /></span>
                </button>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;