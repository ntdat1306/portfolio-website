import React from 'react';
import styles from './Home.module.scss';
import useLanguage from '@hooks/useLanguage';

const Home = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['home']}>
            <div className={styles['container']}>
                <div className={styles['line1']}>
                    <div>🎉</div>
                    <div>{dataLanguage?.page?.home?.hero?.line1}</div>
                </div>
                <div className={styles['line2']}>{dataLanguage?.page?.home?.hero?.line2}</div>
                <div className={styles['line3']}>{dataLanguage?.page?.home?.hero?.line3}</div>
                <div className={styles['btn-container']}>
                    <div className={styles['btn-primary']}>{dataLanguage?.page?.home?.hero?.primary}</div>
                    <div className={styles['btn-secondary']}>{dataLanguage?.page?.home?.hero?.secondary}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
