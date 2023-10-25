import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../../components/app-header/app-header';
import styles from './not-found.module.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <AppHeader />
        <main>
            <div className={styles.wrapper}>
            <div className={styles.text}>
                <h1 className={`${styles.heading} text text_type_main-large`}>404</h1>
                <p className={`${styles.paragraph} text text_type_main-medium`}>
                Упс! Вы попали на несуществующую страницу
                </p>
            </div>
            <div className={styles.image} />
            <Button
                htmlType="button"
                type="primary"
                size="medium"
                onClick={() => navigate(-1)}
            >
                Вернуться назад
            </Button>
            </div>
        </main>
        </>
    );
};

export default NotFoundPage;
