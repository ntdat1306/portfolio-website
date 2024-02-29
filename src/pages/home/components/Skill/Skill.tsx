import React from 'react';
import styles from './Skill.module.scss';
import { Title } from '@components/ui/Title';
import { Marquee } from '../Marquee';
import { FontAwesomeRectangleCodeRegular } from '@components/icon/Icon';
import { listItemMarqueeLtr, listItemMarqueeRtl } from '@utils/constants/home';
import useLanguage from '@hooks/useLanguage';
import Reveal from '@components/animate/Reveal/Reveal';

const Skill = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['skill']} id='skill'>
            <Title icon={<FontAwesomeRectangleCodeRegular />} text={dataLanguage?.page?.home?.skill?.title} />
            <div className={styles['skill-group']}>
                <Marquee data={listItemMarqueeLtr} direction='ltr' />
                <Marquee data={listItemMarqueeRtl} direction='rtl' />
            </div>
        </div>
    );
};

export default Skill;
