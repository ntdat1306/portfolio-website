import React from 'react';
import styles from './Home.module.scss';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { listItemExperience, listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';
import useLanguage from '@hooks/useLanguage';
import { FontAwesomeLink } from '@components/icon/Icon';
import { ButtonSecondary } from '@components/common/Button/ButtonSecondary';

const Home = () => {
    const dataLanguage = useLanguage();

    const listCard = listItemExperience.map((item) => (
        <div key={item.key} className={styles['card']}>
            {/* Header */}
            <div className={styles['header']}>
                <div className={styles['top']}>
                    <div className={styles['logo']}>
                        <img src={item?.logo} alt='' />
                    </div>
                </div>
                <div className={styles['bottom']}>
                    <div className={styles['company']}>
                        {dataLanguage?.page?.home?.experience?.card?.[item.key]?.company}
                    </div>

                    <div className={styles['position']}>
                        {dataLanguage?.page?.home?.experience?.card?.[item.key]?.position}
                    </div>
                    <div className={styles['date']}>{dataLanguage?.page?.home?.experience?.card?.[item.key]?.date}</div>
                </div>
            </div>

            <div className={styles['body']}>
                {dataLanguage?.page?.home?.experience?.card?.[item.key]?.description.map((item: any, index: number) => (
                    <div key={index} className={styles['description']}>
                        {item}
                    </div>
                ))}
            </div>

            <div className={styles['footer']}>
                <a href={item?.website?.link} target='_blank' className={styles['btn-view-website']}>
                    <div className={styles['icon']}>
                        <FontAwesomeLink />
                    </div>
                    <div className={styles['text']}>{item?.website?.text}</div>
                </a>
            </div>
        </div>
    ));

    return (
        <div className={styles['home']}>
            <Hero />
            <div className={styles['marquee-container']}>
                <Marquee data={listItemMarqueeLtr} direction='ltr' />
                <Marquee data={listItemMarqueeRtl} direction='rtl' />
            </div>

            <div className={styles['experience']}>
                <div className={styles['title']}>Experience</div>
                <div className={styles['card-group']}>{listCard}</div>
            </div>
        </div>
    );
};

export default Home;
