import React from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

export default function Logo(): React.ReactElement {
    return (
        <div className={cx('logo')}>
            <h1 className={cx('text')}>Instagram</h1>
        </div>
    );
}
