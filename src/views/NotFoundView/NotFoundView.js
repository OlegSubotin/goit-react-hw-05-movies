import s from './NotFoundView.module.css';
function NotFoundView() {
    return (
        <div className={s.wrapper}>
            <h2> 404</h2>
            <h3>We can't find that page</h3>
            <p>
                We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.
            </p>
        </div>
    );
};

export default NotFoundView;