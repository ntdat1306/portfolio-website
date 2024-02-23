import React from 'react';
import styles from './Home.module.scss';
import useLanguage from '@hooks/useLanguage';

const Home = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['home']}>
            <div className={styles['container']}>
                <div className={styles['line1']}>{dataLanguage?.page?.home?.hero?.line1}</div>
                <div className={styles['line2']}>{dataLanguage?.page?.home?.hero?.line2}</div>
                <div className={styles['line3']}>{dataLanguage?.page?.home?.hero?.line3}</div>
                <div className={styles['line3']}>{dataLanguage?.page?.home?.hero?.line4}</div>
                {/* <div className={styles['avatar']}>
                    <img src='' alt='' />
                </div> */}
                <div className={styles['btn-download-cv']}>Download CV</div>
            </div>
        </div>
    );
};

export default Home;
