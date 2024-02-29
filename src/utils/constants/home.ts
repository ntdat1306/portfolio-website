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
import TCLogo from '@assets/images/tc-company.png';
import VCCorpLogo from '@assets/images/vccorp-company.png';

import MochiProject from '@assets/images/mochi-project.png';
import TCProject from '@assets/images/tc-project.png';
import TransportationProject from '@assets/images/transportation-project.png';
import EcommerceProject from '@assets/images/ecommerce-project.png';

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
    {
        key: 'experience3',
        logo: VCCorpLogo,
        website: {
            text: 'Website',
            link: 'https://vccorp.vn/',
        },
    },
];

export const listItemProject = [
    {
        key: 'project1',
        image: MochiProject,
        website:
            'https://chromewebstore.google.com/detail/mochi-dictionary-t%E1%BB%AB-%C4%91i%E1%BB%83n/ejmmioggcokagpjlajeilkakgphhmmbj?hl=vi',
        deploy: true,
        technology: ['ReactJS', 'SCSS'],
    },
    {
        key: 'project2',
        image: TCProject,
        website: 'https://chromewebstore.google.com/detail/tc-extension/aghobpphojjkdknpdkfdmmhaidjlndlf?hl=vi',
        deploy: true,
        technology: ['ReactJS', 'TypeScript', 'SCSS', 'Flask'],
    },
    {
        key: 'project3',
        image: TransportationProject,
        website: 'https://www.vantaithanhcong.net/',
        deploy: true,
        technology: ['ReactJS', 'TypeScript', 'SCSS', 'Google App Script'],
    },
    {
        key: 'project4',
        image: EcommerceProject,
        deploy: false,
        technology: ['ReactJS', 'NodeJS'],
    },
];
