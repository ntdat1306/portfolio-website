import React from 'react';
import styles from './Project.module.scss';

import {
    FontAwesomeBriefcaseBlankRegular,
    FontAwesomeClockRegular,
    FontAwesomeLink,
    FontAwesomeNewspaperRegular,
} from '@components/icon/Icon';
import useLanguage from '@hooks/useLanguage';
import { listItemProject } from '@utils/constants/home';
import { Title } from '@components/ui/Title';

const Project = () => {
    const dataLanguage = useLanguage();

    const listCard = listItemProject.map((item, index) => (
        <div key={item.key} className={`${styles['container']} ${index % 2 === 1 ? styles['reverse'] : ''}`}>
            <div className={styles['image']}>
                <img src={item.image} alt='' />
            </div>
            {/* Content */}
            <div className={styles['content']}>
                {/* Header */}
                <div className={styles['header']}>
                    {/* Name */}
                    <div className={styles['name']}>{dataLanguage?.page?.home?.project?.card?.[item.key]?.name}</div>
                    {/* Position */}
                    <div className={styles['position']}>
                        <div className={styles['icon']}>
                            <FontAwesomeBriefcaseBlankRegular />
                        </div>
                        <div className={styles['text']}>
                            {dataLanguage?.page?.home?.project?.card?.[item.key]?.position}
                        </div>
                    </div>
                    {/* Date */}
                    <div className={styles['date']}>
                        <div className={styles['icon']}>
                            <FontAwesomeClockRegular />
                        </div>
                        <div className={styles['text']}>
                            {dataLanguage?.page?.home?.project?.card?.[item.key]?.date}
                        </div>
                    </div>
                </div>
                {/* Body */}
                <div className={styles['body']}>
                    <div className={styles['description-container']}>
                        {dataLanguage?.page?.home?.project?.card?.[item.key]?.description.map(
                            (item: any, index: number) => (
                                <div key={index} className={styles['description']}>
                                    {item}
                                </div>
                            )
                        )}
                    </div>
                    <div className={styles['technology-container']}>
                        {item?.technology?.map((tech, index) => (
                            <div key={tech + index + ''} className={styles['technology']}>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Footer */}
                {item?.deploy && (
                    <div className={styles['footer']}>
                        <a href={item?.website} target='_blank' className={styles['btn-view-website']}>
                            <div className={styles['icon']}>
                                <FontAwesomeLink />
                            </div>
                            <div className={styles['text']}>{dataLanguage?.page?.home?.project?.link}</div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    ));

    return (
        <div className={styles['project']}>
            <Title icon={<FontAwesomeNewspaperRegular />} text={dataLanguage?.page?.home?.project?.title} />
            <div className={styles['project-group']}>{listCard}</div>
        </div>
    );
};

export default Project;
