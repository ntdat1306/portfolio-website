import React from 'react';
import styles from './Menu.module.scss';
import { listMenu } from '@utils/constants/navbar';
import { Link } from 'react-router-dom';
import useLanguage from '@hooks/useLanguage';

const Menu = () => {
    const dataLanguage = useLanguage();
    const listItems = listMenu.map((item) => (
        <Link
            to={item.path}
            key={item.key}
            className={`${styles['item']} ${item.path === location.pathname ? styles['active'] : ''}`}
        >
            {dataLanguage?.navbar?.menu?.[item.key]}
        </Link>
    ));

    return <div className={styles['menu']}>{listItems}</div>;
};

export default Menu;
