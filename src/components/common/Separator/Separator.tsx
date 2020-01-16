import React from 'react';
import classNames from 'classnames/bind';
import styles from './Separator.module.scss';

const cx = classNames.bind(styles);

type SeparatorProps = {
    children: string;
};

export default function Separator({
    children,
}: SeparatorProps): React.ReactElement {
    return (
        <div className={cx('separator')}>
            <div className={cx('separator-line')} />
            <div className={cx('separator-text')}>{children}</div>
            <div className={cx('separator-line')} />
        </div>
    );
}
