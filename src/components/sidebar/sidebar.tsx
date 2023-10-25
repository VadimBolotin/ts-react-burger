import classNames from 'classnames';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/app/hooks';
import { ROUTES } from '../../utils/constants';
import { logoutUser } from '../../services/features/user/api';
import { isLoading } from '../../services/features/user/selectors';

import styles from './sidebar.module.css';

interface ISidebarProps {
    description: string;
}

interface ILinks {
    name: string;
    url: string;
}

const links: ILinks[] = [
    {
        name: 'Профиль',
        url: ROUTES.user.profile,
    },
    {
        name: 'История заказов',
        url: ROUTES.user.orders,
    },
];

const Sidebar = ({ description }: ISidebarProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const onLogoutUser = () => {
        dispatch(logoutUser())
        .then(() => navigate(`${ROUTES.sign.in}`))
        .catch((err) => console.error(`Error: ${err}`));
    };

    return (
        <nav className={styles.nav}>
        <ul className={`${styles.links} text text_type_main-medium`}>
            {links.map(({ name, url }) => (
            <li className={styles.linksItem} key={name}>
                <Link
                className={classNames(styles.link, {
                    [styles.linkActive]: location.pathname.endsWith(url),
                })}
                to={url}
                >
                {name}
                </Link>
            </li>
            ))}
            <li className={styles.linksItem}>
            <button
                className={`${styles.link} ${styles.button} text text_type_main-medium`}
                type="button"
                disabled={useAppSelector(isLoading)}
                onClick={onLogoutUser}
            >
                Выход
            </button>
            </li>
        </ul>
        <p className={`${styles.description} text text_type_main-small`}>{description}</p>
        </nav>
    );
};

export default Sidebar;
