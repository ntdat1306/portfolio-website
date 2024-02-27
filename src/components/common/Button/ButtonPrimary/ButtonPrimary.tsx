import React from 'react';
import styles from './ButtonPrimary.module.scss';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    startIcon: JSX.Element;
    endIcon: JSX.Element;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props) => {
    const { text, startIcon, endIcon, ...attributes } = props;

    return (
        <button className={styles['btn-primary']} {...attributes}>
            <div className='icon'>{startIcon}</div>
            {text}
            <div className='icon'> {endIcon}</div>
        </button>
    );
};

export default ButtonPrimary;
