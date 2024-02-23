import React, { useContext } from 'react';
import { LanguageContext } from '@context/LanguageContext';
import { AllLanguage } from '@assets/languages';

const useLanguage = () => {
    const context = useContext(LanguageContext);
    const { language } = context;
    const data = AllLanguage.find((item) => item.key === language)?.value;
    return data;
};

export default useLanguage;
