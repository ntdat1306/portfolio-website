import React from 'react';
import styles from './Copyright.module.scss';
import useLanguage from '@hooks/useLanguage';

const Copyright = () => {
    const dataLanguage = useLanguage();

    return <div className={styles['copyright']}>{dataLanguage?.page?.home?.copyright}</div>;
};

export default Copyright;
