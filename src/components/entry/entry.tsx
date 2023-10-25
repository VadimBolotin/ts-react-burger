import { FC, ReactNode, FormEvent } from 'react';
import AppHeader from '../app-header/app-header';
import styles from './entry.module.css';

interface IEntryProps {
    children: ReactNode;
    heading: string;
    links: ReactNode;
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

const Entry: FC<IEntryProps> = ({ children, heading, links, onSubmit }) => (
    <>
        <AppHeader />
        <main>
        <div className={styles.wrapper}>
            <form className={styles.form} noValidate onSubmit={onSubmit}>
            <h1 className={`${styles.heading} text text_type_main-large`}>{heading}</h1>
            {children}
            </form>
            <div className={`${styles.links} text text_type_main-small`}>{links}</div>
        </div>
        </main>
    </>
);

export default Entry;
