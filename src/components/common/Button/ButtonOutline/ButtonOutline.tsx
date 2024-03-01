import React from 'react';
import styles from './ButtonOutline.module.scss';

interface ButtonOutlineProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props) => {
    const { text, startIcon, endIcon, ...attributes } = props;

    return (
        <button className={styles['btn-outline']} {...attributes}>
            <div className='icon'>{startIcon}</div>
            {text}
            <div className='icon'> {endIcon}</div>
        </button>
    );
};

export default ButtonOutline;
