import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);

type WrapperProps = {
    className?: string;
    center?: boolean;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
};

export default function Wrapper({
    className,
    center,
    size = 'sm',
    children,
}: WrapperProps): ReactElement {
    const classes = cx(
        'wrapper',
        className,
        center ? 'center' : '',
        `size-${size}`,
    );

    return <div className={classes}>{children}</div>;
}
