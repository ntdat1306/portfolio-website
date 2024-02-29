import React from 'react';
import styles from './Experience.module.scss';
import useLanguage from '@hooks/useLanguage';
import { listItemExperience } from '@utils/constants/home';
import {
    FontAwesomeBriefcaseBlankRegular,
    FontAwesomeLink,
    FontAwesomeClockRegular,
    FontAwesomeBuildingRegular,
} from '@components/icon/Icon';
import { Title } from '@components/ui/Title';
import Reveal from '@components/animate/Reveal/Reveal';

const Experience = () => {
    const dataLanguage = useLanguage();

    const listCard = listItemExperience.map((item) => (
        <div key={item.key} className={styles['card-container']}>
            <Reveal>
                <div className={styles['card']}>
                    {/* Header */}
                    <div className={styles['header']}>
                        <div className={styles['top']}>
                            <div className={styles['logo']}>
                                <img src={item?.logo} alt='' />
                            </div>
                        </div>
                        <div className={styles['bottom']}>
                            {/* Company */}
                            <div className={styles['company']}>
                                {dataLanguage?.page?.home?.experience?.card?.[item.key]?.company}
                            </div>
                            {/* Position */}
                            <div className={styles['position']}>
                                <div className={styles['icon']}>
                                    <FontAwesomeBriefcaseBlankRegular />
                                </div>
                                <div className={styles['text']}>
                                    {dataLanguage?.page?.home?.experience?.card?.[item.key]?.position}
                                </div>
                            </div>
                            {/* Date */}
                            <div className={styles['date']}>
                                <div className={styles['icon']}>
                                    <FontAwesomeClockRegular />
                                </div>
                                <div className={styles['text']}>
                                    {dataLanguage?.page?.home?.experience?.card?.[item.key]?.date}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className={styles['body']}>
                        {dataLanguage?.page?.home?.experience?.card?.[item.key]?.description.map(
                            (item: any, index: number) => (
                                <div key={index} className={styles['description']}>
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                    {/* Footer */}
                    <div className={styles['footer']}>
                        <a href={item?.website?.link} target='_blank' className={styles['btn-view-website']}>
                            <div className={styles['icon']}>
                                <FontAwesomeLink />
                            </div>
                            <div className={styles['text']}>{item?.website?.text}</div>
                        </a>
                    </div>
                </div>
            </Reveal>
        </div>
    ));

    return (
        <div className={styles['experience']} id='experience'>
            <Title icon={<FontAwesomeBuildingRegular />} text={dataLanguage?.page?.home?.experience?.title} />
            <div className={styles['card-group']}>{listCard}</div>
        </div>
    );
};

export default Experience;
