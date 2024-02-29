import React from 'react';
import styles from './Menu.module.scss';
import { listMenu } from '@utils/constants/navbar';
import { useLocation } from 'react-router-dom';
import useLanguage from '@hooks/useLanguage';

const Menu = () => {
    const dataLanguage = useLanguage();
    const location = useLocation();

    const handleScroll = (path: string) => {
        const element = document.getElementById(path);
        const rect = element?.getBoundingClientRect();
        if (rect) window.scrollTo(0, window.scrollY + rect?.top - 80);
    };

    const listItems = listMenu.map((item) => (
        <div
            onClick={() => handleScroll(item.path)}
            key={item.key}
            className={`${styles['item']} ${item.path === location.pathname ? styles['active'] : ''}`}
        >
            {dataLanguage?.navbar?.menu?.[item.key]}
        </div>
    ));

    return <div className={styles['menu']}>{listItems}</div>;
};

export default Menu;
