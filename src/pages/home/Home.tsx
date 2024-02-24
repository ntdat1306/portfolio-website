import React from 'react';
import styles from './Home.module.scss';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';

const Home = () => {
    return (
        <div className={styles['home']}>
            <Hero />
            <div className={styles['marquee-container']}>
                <Marquee data={listItemMarqueeLtr} direction='ltr' />
                <Marquee data={listItemMarqueeRtl} direction='rtl' />
            </div>
        </div>
    );
};

export default Home;
