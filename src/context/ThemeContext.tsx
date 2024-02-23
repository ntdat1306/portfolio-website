import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeContextType['theme']>('light');

    const value = {
        theme,
        setTheme,
    };

    useEffect(() => {
        const root = document.getElementsByTagName('html')[0];
        root.setAttribute('data-theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
