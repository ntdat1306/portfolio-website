import React from 'react';
import styles from './Home.module.scss';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { listItemExperience, listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';
import useLanguage from '@hooks/useLanguage';
import { FontAwesomeRectangleCodeRegular, FontAwesomeLink, FontAwesomeSparkle } from '@components/icon/Icon';
import { ButtonSecondary } from '@components/common/Button/ButtonSecondary';
import { Experience } from './components/Experience';
import { Ribbon } from './components/Ribbon';
import { Project } from './components/Project';
import { Title } from '@components/ui/Title';

const Home = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['home']}>
            <Hero />
            <Ribbon />
            <Experience />
            <Project />
            {/* Marquee */}
            <div className={styles['marquee-container']}>
                <Title icon={<FontAwesomeRectangleCodeRegular />} text={dataLanguage?.page?.home?.skill?.title} />
                <div className={styles['marquee-group']}>
                    <Marquee data={listItemMarqueeLtr} direction='ltr' />
                    <Marquee data={listItemMarqueeRtl} direction='rtl' />
                </div>
            </div>
        </div>
    );
};

export default Home;
