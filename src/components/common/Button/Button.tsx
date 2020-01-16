import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type ButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function Button({
    className,
    onClick,
    children,
}: ButtonProps): React.ReactElement {
    return (
        <button className={cx('custom-button', className)} onClick={onClick}>
            {children}
        </button>
    );
}
