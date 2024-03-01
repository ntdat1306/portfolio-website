import React from 'react';
import styles from './Home.module.scss';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Ribbon } from './components/Ribbon';
import { Project } from './components/Project';
import { Skill } from './components/Skill';
import { Contact } from './components/Contact';

const Home = () => {
    return (
        <div className={styles['home']}>
            <Hero />
            <Ribbon />
            <Experience />
            <Project />
            <Skill />
            <Contact />
        </div>
    );
};

export default Home;
