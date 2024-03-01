import React from 'react';
import styles from './Contact.module.scss';
import useLanguage from '@hooks/useLanguage';
import { Title } from '@components/ui/Title';
import { ButtonPrimary } from '@components/common/Button/ButtonPrimary';
import { ButtonSecondary } from '@components/common/Button/ButtonSecondary';
import { ButtonOutline } from '@components/common/Button/ButtonOutline';
import Reveal from '@components/animate/Reveal/Reveal';

const Contact = () => {
    const dataLanguage = useLanguage();

    return (
        <div className={styles['contact']} id='contact'>
            <Title
                text={dataLanguage?.page?.home?.contact?.title?.text}
                description={dataLanguage?.page?.home?.contact?.title?.description}
            />
            <Reveal>
                <div className={styles['contact-group']}>
                    <div className={styles['left']}>
                        <div className={styles['text']}>{dataLanguage?.page?.home?.contact?.main?.left?.text}</div>
                        <ButtonPrimary
                            style={{ borderRadius: '999px', padding: '0.75rem 1rem' }}
                            text={dataLanguage?.page?.home?.contact?.main?.left?.button}
                        />
                    </div>
                    <div className={styles['divider']}>
                        <div className={styles['text']}>{dataLanguage?.page?.home?.contact?.main?.or}</div>
                        <div className={styles['line']}></div>
                    </div>
                    <div className={styles['right']}>
                        <div className={styles['text']}>{dataLanguage?.page?.home?.contact?.main?.right?.text}</div>
                        <ButtonOutline
                            style={{ borderRadius: '999px', padding: '0.75rem 1rem' }}
                            text={dataLanguage?.page?.home?.contact?.main?.right?.button}
                        />
                    </div>
                </div>
            </Reveal>
        </div>
    );
};

export default Contact;
