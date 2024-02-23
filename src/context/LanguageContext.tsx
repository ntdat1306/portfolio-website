import React, { createContext, useState } from 'react';

interface LanguageContextType {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

interface LanguageContextProviderProps {
    children: React.ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageContextType['language']>('us');

    const value = {
        language,
        setLanguage,
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
