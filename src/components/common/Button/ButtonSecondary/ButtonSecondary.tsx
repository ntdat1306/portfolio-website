import React from 'react';
import styles from './ButtonSecondary.module.scss';

interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = (props) => {
    const { text, startIcon, endIcon, ...attributes } = props;

    return (
        <button className={styles['btn-secondary']} {...attributes}>
            <div className='icon'>{startIcon}</div>
            {text}
            <div className='icon'> {endIcon}</div>
        </button>
    );
};

export default ButtonSecondary;
