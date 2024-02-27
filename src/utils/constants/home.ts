import {
    VscodeIconsFileTypeCss,
    VscodeIconsFileTypeFirebase,
    VscodeIconsFileTypeHtml,
    VscodeIconsFileTypeJsOfficial,
    VscodeIconsFileTypeMongo,
    VscodeIconsFileTypeMysql,
    VscodeIconsFileTypeNode,
    VscodeIconsFileTypePython,
    VscodeIconsFileTypeReactjs,
    VscodeIconsFileTypeScss,
    VscodeIconsFileTypeTypescriptOfficial,
    VscodeIconsFileTypeVite,
    VscodeIconsFileTypeWebpack,
} from '../../components/icon/Icon';

import AkiraLogo from '@assets/images/akira-company.png';
import TCLogo from '@assets/images/tc-company.jpg';

interface ItemMarqueeType {
    icon: JSX.Element;
    text: string;
}

export const listItemMarqueeLtr: ItemMarqueeType[] = [
    {
        icon: VscodeIconsFileTypeHtml(),
        text: 'HTML',
    },
    {
        icon: VscodeIconsFileTypeCss(),
        text: 'CSS',
    },
    {
        icon: VscodeIconsFileTypeJsOfficial(),
        text: 'JavaScript',
    },
    {
        icon: VscodeIconsFileTypeWebpack(),
        text: 'Webpack',
    },
    {
        icon: VscodeIconsFileTypeReactjs(),
        text: 'ReactJS',
    },
    {
        icon: VscodeIconsFileTypeScss(),
        text: 'SCSS',
    },
    {
        icon: VscodeIconsFileTypeTypescriptOfficial(),
        text: 'TypeScript',
    },
    {
        icon: VscodeIconsFileTypeVite(),
        text: 'Vite',
    },
];

export const listItemMarqueeRtl: ItemMarqueeType[] = [
    {
        icon: VscodeIconsFileTypeNode(),
        text: 'NodeJS',
    },
    {
        icon: VscodeIconsFileTypePython(),
        text: 'Python',
    },
    {
        icon: VscodeIconsFileTypeMysql(),
        text: 'MySQL',
    },
    {
        icon: VscodeIconsFileTypeMongo(),
        text: 'MongoDB',
    },
    {
        icon: VscodeIconsFileTypeFirebase(),
        text: 'Firebase',
    },
];

export const listItemExperience = [
    {
        key: 'experience1',
        logo: AkiraLogo,
        website: {
            text: 'Website',
            link: 'https://akira.edu.vn/',
        },
    },
    {
        key: 'experience2',
        logo: TCLogo,
        website: {
            text: 'Website',
            link: 'https://www.vantaithanhcong.net/',
        },
    },
];
