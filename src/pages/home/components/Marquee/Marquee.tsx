import React from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
    data: { [key: string]: any }[];
    direction: 'ltr' | 'rtl';
}

const Marquee: React.FC<MarqueeProps> = (props) => {
    const { data, direction } = props;
    
    const listItems = [...Array(10).keys()].reduce((accumulator: any, currentValue) => {
        const elements = data.map((item, index) => (
            <div key={item.text + index + currentValue + ''} className={styles['item']}>
                <div className={styles['icon']}>{item.icon}</div>
                <div className={styles['text']}>{item.text}</div>
            </div>
        ));
        return [...elements, ...accumulator];
    }, []);

    return (
        <div className={styles['marquee']}>
            <div className={`${styles['slide']} ${styles[direction]}`}>{listItems}</div>
        </div>
    );
};

export default Marquee;
