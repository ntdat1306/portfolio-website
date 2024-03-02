import React from 'react';
import styles from './Contact.module.scss';
import useLanguage from '@hooks/useLanguage';
import { Title } from '@components/ui/Title';
import { ButtonPrimary } from '@components/common/Button/ButtonPrimary';
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
                    {/* Left */}
                    <div className={styles['left']}>
                        <div className={styles['main']}>
                            <div className={styles['text']}>{dataLanguage?.page?.home?.contact?.main?.left?.text}</div>
                            <div className={styles['info']}>{dataLanguage?.page?.home?.contact?.main?.left?.info}</div>
                        </div>
                        <ButtonPrimary
                            style={{ borderRadius: '999px', padding: '0.75rem 1rem' }}
                            text={dataLanguage?.page?.home?.contact?.main?.left?.button}
                        />
                    </div>
                    {/* Divider */}
                    <div className={styles['divider']}>
                        <div className={styles['text']}>{dataLanguage?.page?.home?.contact?.main?.or}</div>
                        <div className={styles['line']}></div>
                    </div>
                    {/* Right */}
                    <div className={styles['right']}>
                        <div className={styles['main']}>
                            <div className={styles['text']}>{dataLanguage?.page?.home?.contact?.main?.right?.text}</div>
                            <div className={styles['info']}>{dataLanguage?.page?.home?.contact?.main?.right?.info}</div>
                        </div>
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
