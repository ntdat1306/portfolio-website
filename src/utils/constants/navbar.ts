import {
    EmojioneFlagForUnitedStates,
    EmojioneFlagForVietnam,
    SolarLaptopMinimalisticOutline,
    SolarMoonOutline,
    SolarSun2Outline,
} from '@components/icon/Icon';

interface MenuType {
    path: string;
    key: string;
}

interface LanguageType {
    icon: JSX.Element;
    key: string;
    text: string;
}

interface ThemeType {
    icon: JSX.Element;
    key: string;
}

export const listMenu: MenuType[] = [
    {
        path: '/',
        key: 'home',
    },
    {
        path: '/experience',
        key: 'experience',
    },
    {
        path: '/project',
        key: 'project',
    },
    {
        path: '/skill',
        key: 'skill',
    },
    {
        path: '/contact',
        key: 'contact',
    },
];

export const listLanguage: LanguageType[] = [
    {
        icon: EmojioneFlagForUnitedStates(),
        key: 'us',
        text: 'US',
    },
    {
        icon: EmojioneFlagForVietnam(),
        key: 'vn',
        text: 'VN',
    },
];

export const listTheme: ThemeType[] = [
    {
        icon: SolarSun2Outline(),
        key: 'light',
    },
    {
        icon: SolarMoonOutline(),
        key: 'dark',
    },
    {
        icon: SolarLaptopMinimalisticOutline(),
        key: 'system',
    },
];
