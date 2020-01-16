import React from 'react';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

type ContentProps = {
    children: React.ReactNode;
};

export default function Content({
    children,
}: ContentProps): React.ReactElement {
    return <div className={cx('content')}>{children}</div>;
}
