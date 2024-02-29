import {
    EmojioneFlagForUnitedStates,
    EmojioneFlagForVietnam,
    FontAwesomeSunBright,
    FontAwesomePalette,
    FontAwesomeMoon,
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
        path: 'hero',
        key: 'home',
    },
    {
        path: 'experience',
        key: 'experience',
    },
    {
        path: 'project',
        key: 'project',
    },
    {
        path: 'skill',
        key: 'skill',
    },
    {
        path: 'contact',
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
        icon: FontAwesomeSunBright(),
        key: 'light',
    },
    {
        icon: FontAwesomeMoon(),
        key: 'dark',
    },
    {
        icon: FontAwesomePalette(),
        key: 'system',
    },
];
