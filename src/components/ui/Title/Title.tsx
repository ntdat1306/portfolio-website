import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
    icon?: JSX.Element;
    text: string;
}

const Title: React.FC<TitleProps> = (props) => {
    const { icon, text } = props;
    return (
        <div className={styles['title']}>
            <div className={styles['icon']}>{icon}</div>
            <div className={styles['text']}>{text}</div>
        </div>
    );
};

export default Title;
