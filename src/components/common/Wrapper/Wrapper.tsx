import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';

const cx = classNames.bind(styles);

type WrapperProps = {
    className?: string;
    center?: boolean;
    direction?: 'column' | 'row';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: object;
    children: React.ReactNode;
};

export default function Wrapper({
    className,
    center,
    size,
    direction = 'column',
    children,
    style,
}: WrapperProps): ReactElement {
    const classes = cx(
        'wrapper',
        className,
        center ? 'center' : '',
        direction,
        `size-${size}`,
    );

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}
