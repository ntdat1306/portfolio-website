import React from 'react';
import styles from './Title.module.scss';
import Reveal from '@components/animate/Reveal/Reveal';

interface TitleProps {
    icon?: JSX.Element;
    text: string;
    description?: string;
}

const Title: React.FC<TitleProps> = (props) => {
    const { icon, text, description } = props;
    return (
        <Reveal>
            <>
                <div className={styles['title']}>
                    <div className={styles['main']}>
                        {icon && <div className={styles['icon']}>{icon}</div>}
                        <div className={styles['text']}>{text}</div>
                    </div>
                    {description && <div className={styles['description']}>{description}</div>}
                </div>
            </>
        </Reveal>
    );
};

export default Title;
