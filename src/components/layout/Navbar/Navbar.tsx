import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import useNavbar from '@hooks/useNavbar';
import { FontAwesomeBarsSort } from '@components/icon/Icon';
import { Menu } from './components/Menu';
import { Language } from './components/Language';
import { Theme } from './components/Theme';
import useClickOutside from '@hooks/useClickOutside';
import { ResponsiveMenu } from './components/ResponsiveMenu';

const Navbar = () => {
    const { logo, showExpand } = useNavbar();
    const [expand, setExpand] = useState<boolean>(false);
    const expandRef = useClickOutside(() => setExpand(false));

    const handleToggle = () => {
        setExpand(!expand);
    };

    const responsiveMenuProps = {
        expand,
        expandRef,
        handleToggle,
    };

    return (
        <>
            <div className={styles['navbar']}>
                {/* Left */}
                <div className={styles['left']}>
                    {showExpand ? (
                        <div className={styles['expand']} onClick={handleToggle}>
                            <FontAwesomeBarsSort />
                        </div>
                    ) : (
                        <>
                            <Link to='/' className={styles['logo']}>
                                <div className={styles['icon']}>{logo}</div>
                                <div className={styles['text']}>ntd/portfolio</div>
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
            {/* Responsive */}
            <ResponsiveMenu {...responsiveMenuProps} />
        </>
    );
};

export default Navbar;
