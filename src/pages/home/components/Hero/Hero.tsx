import React from 'react';
import styles from './Hero.module.scss';
import useLanguage from '@hooks/useLanguage';
import { Link } from 'react-router-dom';
import CV from '@assets/files/CV.pdf';

const Hero = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['hero']}>
            <div className={styles['line1']}>
                <div>🎉</div>
                <div className={styles['divider']}></div>
                <div>{dataLanguage?.page?.home?.hero?.line1}</div>
            </div>
            <div className={styles['line2']}>{dataLanguage?.page?.home?.hero?.line2}</div>
            <div className={styles['line3']}>{dataLanguage?.page?.home?.hero?.line3}</div>
            <div className={styles['btn-container']}>
                <Link
                    to={CV}
                    download='Nguyễn Tiến Đạt - ReactJS Developer'
                    target='_blank'
                    rel='noreferrer'
                    className={styles['btn-primary']}
                >
                    {dataLanguage?.page?.home?.hero?.primary}
                </Link>
                <div className={styles['btn-secondary']}>{dataLanguage?.page?.home?.hero?.secondary}</div>
            </div>
        </div>
    );
};

export default Hero;
