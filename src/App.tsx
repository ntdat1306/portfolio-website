import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '@pages/home';
import Layout from './pages';
import LanguageContextProvider from '@context/LanguageContext';
import ThemeContextProvider from '@context/ThemeContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: 'experience',
            //     element: <Experience />,
            // },
        ],
    },
]);

const App = () => {
    return (
        <LanguageContextProvider>
            <ThemeContextProvider>
                <RouterProvider router={router} />
            </ThemeContextProvider>
        </LanguageContextProvider>
    );
};

export default App;
