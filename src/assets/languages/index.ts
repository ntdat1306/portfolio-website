import { US } from './us';
import { VN } from './vn';

interface LanguageType {
    key: string;
    value: {
        [key: string]: any;
    };
}

export const AllLanguage: LanguageType[] = [
    {
        key: 'vn',
        value: VN,
    },
    {
        key: 'us',
        value: US,
    },
];
