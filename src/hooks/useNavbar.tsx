import { LanguageContext } from '@context/LanguageContext';
import { listLanguage, listTheme } from '@utils/constants/navbar';
import React, { useContext, useEffect, useState } from 'react';
import useTheme from './useTheme';
import { SkillIconsHtmxDark, SkillIconsHtmxLight } from '@components/icon/Icon';
import useWindowSize from './useWindowSize';

const useNavbar = () => {
    const [show, setShow] = useState<string>('');
    const { theme, setTheme } = useTheme();
    const languageContext = useContext(LanguageContext);
    const { language, setLanguage } = languageContext;
    const windowSize = useWindowSize();
    const flag = listLanguage.find((item) => item.key === language)?.icon;
    const mode = listTheme.find((item) => item.key === theme)?.icon;
    const [logo, setLogo] = useState(<SkillIconsHtmxDark />);
    const showExpand = windowSize.width <= 768;

    const getPreferredColorScheme = () => {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setLogo(<SkillIconsHtmxLight />);
            } else {
                setLogo(<SkillIconsHtmxDark />);
            }
        } else setLogo(<SkillIconsHtmxDark />);
    };

    const handleMouseEnter = (item: string) => {
        setShow(item);
    };

    const handleMouseLeave = () => {
        setShow('');
    };

    const handleLanguage = (language: string) => {
        setLanguage(language);
        setShow('');
    };

    const handleTheme = (mode: string) => {
        setTheme(mode);
        setShow('');
    };

    useEffect(() => {
        if (theme === 'light') setLogo(<SkillIconsHtmxDark />);
        if (theme === 'dark') setLogo(<SkillIconsHtmxLight />);
        if (theme === 'system') {
            getPreferredColorScheme();
            // Listen for change
            const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            colorSchemeQuery.addEventListener('change', getPreferredColorScheme);
        }
    }, [theme]);

    return {
        logo,
        mode,
        flag,
        show,
        language,
        theme,
        showExpand,
        handleMouseEnter,
        handleMouseLeave,
        handleLanguage,
        handleTheme,
    };
};

export default useNavbar;
