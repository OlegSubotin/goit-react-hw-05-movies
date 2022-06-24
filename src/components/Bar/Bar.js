import Navigation from "components/Navigation";
import s from './Bar.module.css';

function Bar () {
    return (
        <header className={s.header}>
            <Navigation />
        </header>
    );
};

export default Bar;