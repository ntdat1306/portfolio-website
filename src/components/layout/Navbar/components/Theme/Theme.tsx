import React from 'react';
import styles from './Theme.module.scss';
import useNavbar from '@hooks/useNavbar';
import { motion } from 'framer-motion';
import { listTheme } from '@utils/constants/navbar';
import useLanguage from '@hooks/useLanguage';

const Language = () => {
    const dataLanguage = useLanguage();
    const { mode, show, theme, handleMouseEnter, handleMouseLeave, handleTheme } = useNavbar();

    const listThemes = listTheme.map((item) => (
        <div
            key={item.key}
            className={`${styles['item']} ${item.key === theme ? styles['active'] : ''}`}
            onClick={() => handleTheme(item.key)}
        >
            <div className={styles['text']}>{dataLanguage?.navbar?.theme?.[item.key]}</div>
        </div>
    ));

    return (
        <div className={styles['theme']} onMouseEnter={() => handleMouseEnter('theme')} onMouseLeave={handleMouseLeave}>
            <div className={styles['icon']}>{mode}</div>
            {show === 'theme' && (
                <div className={styles['list']}>
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: 'easeOut', duration: 0.2 }}
                        className={styles['container']}
                    >
                        {listThemes}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Language;
