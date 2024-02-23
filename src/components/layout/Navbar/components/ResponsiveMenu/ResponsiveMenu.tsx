import React from 'react';
import styles from './ResponsiveMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { listMenu } from '@utils/constants/navbar';
import useLanguage from '@hooks/useLanguage';
import { AnimatePresence, motion } from 'framer-motion';
import { SolarUndoLeftRoundOutline } from '@components/icon/Icon';
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

    const listItems = listMenu.map((item) => (
        <Link
            to={item.path}
            key={item.key}
            className={`${styles['item']} ${item.path === location.pathname ? styles['active'] : ''}`}
            onClick={handleToggle}
        >
            {dataLanguage?.navbar?.menu?.[item.key]}
        </Link>
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
                            <div className={styles['logo']}>
                                <div className={styles['icon']}>{logo}</div>
                                <div className={styles['text']}>NTD</div>
                            </div>
                            <div className={styles['btn-close']} onClick={handleToggle}>
                                <SolarUndoLeftRoundOutline />
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
