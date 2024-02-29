import React from 'react';
import styles from './Home.module.scss';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { listItemExperience, listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';
import useLanguage from '@hooks/useLanguage';
import { FontAwesomeLink, FontAwesomeSparkle } from '@components/icon/Icon';
import { ButtonSecondary } from '@components/common/Button/ButtonSecondary';
import { Experience } from './components/Experience';
import { Ribbon } from './components/Ribbon';
import { Project } from './components/Project';

const Home = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['home']}>
            <Hero />
            <Ribbon />
            <Experience />
            <Project />
            <div className={styles['marquee-container']}>
                <div className={styles['title']}>{dataLanguage?.page?.home?.skill?.title}</div>
                <div className={styles['marquee-group']}>
                    <Marquee data={listItemMarqueeLtr} direction='ltr' />
                    <Marquee data={listItemMarqueeRtl} direction='rtl' />
                </div>
            </div>
        </div>
    );
};

export default Home;
