import React from 'react';
import styles from './Home.module.scss';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { listItemExperience, listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';
import useLanguage from '@hooks/useLanguage';
import { FontAwesomeLink } from '@components/icon/Icon';
import { ButtonSecondary } from '@components/common/Button/ButtonSecondary';
import { Experience } from './components/Experience';

const Home = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['home']}>
            <Hero />
            <div className={styles['marquee-container']}>
                <Marquee data={listItemMarqueeLtr} direction='ltr' />
                <Marquee data={listItemMarqueeRtl} direction='rtl' />
            </div>
            <Experience />
        </div>
    );
};

export default Home;
