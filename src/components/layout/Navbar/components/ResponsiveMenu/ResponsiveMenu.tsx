import React from 'react';
import styles from './ResponsiveMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { listMenu } from '@utils/constants/navbar';
import useLanguage from '@hooks/useLanguage';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeXMark } from '@components/icon/Icon';
import useNavbar from '@hooks/useNavbar';

interface ResponsiveMenuProps {
    expand: boolean;
    expandRef: React.MutableRefObject<HTMLInputElement>;
    handleToggle: () => void;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = (props) => {
    const { expand, expandRef, handleToggle } = props;
    const dataLanguage = useLanguage();
    const { logo } = useNavbar();
    const location = useLocation();

    const handleScroll = (path: string) => {
        const element = document.getElementById(path);
        const rect = element?.getBoundingClientRect();
        if (rect) window.scrollTo(0, window.scrollY + rect?.top - 80);
    };

    const listItems = listMenu.map((item) => (
        <div
            key={item.key}
            className={`${styles['item']} ${item.path === location.pathname ? styles['active'] : ''}`}
            onClick={() => {
                handleScroll(item.path);
                handleToggle();
            }}
        >
            {dataLanguage?.navbar?.menu?.[item.key]}
        </div>
    ));

    return (
        <AnimatePresence>
            {expand && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.2 }}
                        className={styles['bg-blur']}
                    ></motion.div>
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        exit={{ x: '-100%' }}
                        transition={{ ease: 'easeInOut', duration: 0.2 }}
                        ref={expandRef}
                        className={styles['responsive-menu']}
                    >
                        <div className={styles['header']}>
                            <Link to='/' className={styles['logo']} onClick={handleToggle}>
                                <div className={styles['icon']}>{logo}</div>
                                <div className={styles['text']}>ntd/portfolio</div>
                            </Link>
                            <div className={styles['btn-close']} onClick={handleToggle}>
                                <FontAwesomeXMark />
                            </div>
                        </div>
                        <div className={styles['menu']}>{listItems}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
