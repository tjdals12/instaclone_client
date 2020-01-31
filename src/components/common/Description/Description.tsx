import React from 'react';
import classNames from 'classnames/bind';
import styles from './Description.module.scss';

const cx = classNames.bind(styles);

type DescriptionProps = {
    title: string;
    content: string;
};

export default function Description({
    title,
    content,
}: DescriptionProps): React.ReactElement {
    return (
        <span className={cx('description')}>
            <strong className={cx('title')}>{title}</strong> {content}
        </span>
    );
}
