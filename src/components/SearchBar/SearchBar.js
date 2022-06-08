import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

function SearchBar({ onSubmit, onChange }) {
    
    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={onSubmit}>
                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    name="query"
                    onChange={onChange}
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
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;