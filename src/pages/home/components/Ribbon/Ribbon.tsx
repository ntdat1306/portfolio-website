import React from 'react';
import styles from './Ribbon.module.scss';
import { FontAwesomeSparkle } from '@components/icon/Icon';

const Ribbon = () => {
    const listText = ['Frontend Developer', 'ReactJS Developer', 'Web Developer'];

    const listItem = [...Array(10).keys()].reduce((accumulator: any, currentValue) => {
        const elements = listText.map((item, index) => (
            <div key={item + index + currentValue + ''} className={styles['item']}>
                <div className={styles['icon']}>
                    <FontAwesomeSparkle />
                </div>
                <div className={styles['text']}>{item}</div>
            </div>
        ));
        return [...elements, ...accumulator];
    }, []);

    return (
        <div className={styles['ribbon-container']}>
            <div className={`${styles['ribbon']} ${styles['bottom']}`}>
                <div className={styles['slide']}>{listItem}</div>
            </div>
            <div className={`${styles['ribbon']} ${styles['top']}`}>
                <div className={styles['slide']}>{listItem}</div>
            </div>
        </div>
    );
};

export default Ribbon;
