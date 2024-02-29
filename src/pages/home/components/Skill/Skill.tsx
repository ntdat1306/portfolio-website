import React from 'react';
import styles from './Skill.module.scss';
import { Title } from '@components/ui/Title';
import { Marquee } from '../Marquee';
import { listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';
import useLanguage from '@hooks/useLanguage';
import Reveal from '@components/animate/Reveal/Reveal';

const Skill = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['skill']} id='skill'>
            <Title text={dataLanguage?.page?.home?.skill?.title} />
            <Reveal>
                <div className={styles['skill-group']}>
                    <Marquee data={listItemMarqueeLtr} direction='ltr' />
                    <Marquee data={listItemMarqueeRtl} direction='rtl' />
                </div>
            </Reveal>
        </div>
    );
};

export default Skill;
