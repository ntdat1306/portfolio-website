import React from 'react';
import styles from './Hero.module.scss';
import useLanguage from '@hooks/useLanguage';
import CV from '@assets/files/CV.pdf';
import { FontAwesomePartyHornRegular } from '@components/icon/Icon';

const Hero = () => {
    const dataLanguage = useLanguage();

    const handleScroll = (path: string) => {
        const element = document.getElementById(path);
        const rect = element?.getBoundingClientRect();
        if (rect) window.scrollTo(0, window.scrollY + rect?.top - 80);
    };

    const handleClickSecondary = () => {
        handleScroll('experience');
    };

    return (
        <div className={styles['hero']} id='hero'>
            <div className={styles['line1']}>
                <div className={styles['icon']}>
                    <FontAwesomePartyHornRegular />
                </div>
                <div className={styles['divider']}></div>
                <div>{dataLanguage?.page?.home?.hero?.line1}</div>
            </div>
            <div className={styles['line2']}>{dataLanguage?.page?.home?.hero?.line2}</div>
            <div className={styles['line3']}>{dataLanguage?.page?.home?.hero?.line3}</div>
            <div className={styles['btn-container']}>
                <a
                    href={CV}
                    download='Nguyễn Tiến Đạt - ReactJS Developer'
                    target='_blank'
                    rel='noreferrer'
                    className={styles['btn-primary']}
                >
                    {dataLanguage?.page?.home?.hero?.primary}
                </a>
                <div className={styles['btn-secondary']} onClick={handleClickSecondary}>
                    {dataLanguage?.page?.home?.hero?.secondary}
                </div>
            </div>
        </div>
    );
};

export default Hero;
