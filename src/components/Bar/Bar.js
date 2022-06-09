import Navigation from "components/Navigation";
import s from './Bar.module.css';

export default function Bar(){
    return(
        <header className={s.header}>
            <Navigation/>
        </header>
    );
};