import React from 'react';
import styles from './Language.module.scss';
import useNavbar from '@hooks/useNavbar';
import { motion } from 'framer-motion';
import { listLanguage } from '@utils/constants/navbar';

const Language = () => {
    const { flag, show, language, handleMouseEnter, handleMouseLeave, handleLanguage } = useNavbar();

    const listLanguages = listLanguage.map((item) => (
        <div
            key={item.key}
            className={`${styles['item']} ${item.key === language ? styles['active'] : ''}`}
            onClick={() => handleLanguage(item.key)}
        >
            <div className={styles['text']}>{item.text}</div>
        </div>
    ));

    return (
        <div
            className={styles['language']}
            onMouseEnter={() => handleMouseEnter('language')}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles['icon']}>{flag}</div>
            {show === 'language' && (
                <div className={styles['list']}>
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeOut', duration: 0.2 }}
                        className={styles['container']}
                    >
                        {listLanguages}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Language;
