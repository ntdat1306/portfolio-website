import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import useNavbar from '@hooks/useNavbar';
import { SolarListOutline, SolarUndoLeftRoundOutline } from '@components/icon/Icon';
import { Menu } from './components/Menu';
import { Language } from './components/Language';
import { Theme } from './components/Theme';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '@hooks/useClickOutside';

const Navbar = () => {
    const { logo, showExpand } = useNavbar();
    const [expand, setExpand] = useState<boolean>(false);
    const expandRef = useClickOutside(() => setExpand(false));

    const handleToggle = () => {
        setExpand(!expand);
    };

    return (
        <>
            <div className={styles['navbar']}>
                {/* Left */}
                <div className={styles['left']}>
                    {showExpand ? (
                        <div className={styles['expand']} onClick={handleToggle}>
                            <SolarListOutline />
                        </div>
                    ) : (
                        <>
                            <Link to='/' className={styles['logo']}>
                                <div className={styles['icon']}>{logo}</div>
                                <div className={styles['text']}>NTD</div>
                            </Link>
                            <Menu />
                        </>
                    )}
                </div>
                {/* Right */}
                <div className={styles['right']}>
                    <div className={styles['setting']}>
                        <Theme />
                        <Language />
                    </div>
                </div>
            </div>

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
                            <div className={styles['list']}></div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
