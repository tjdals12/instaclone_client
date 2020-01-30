import React from 'react';
import classNames from 'classnames/bind';
import styles from './ListBox.module.scss';

const cx = classNames.bind(styles);

type ListBoxProps = {
    className: string;
    title: string;
    style?: object;
    contentStyle?: object;
    children: React.ReactNode;
};

export default function ListBox({
    className,
    title,
    style,
    contentStyle,
    children,
}: ListBoxProps): React.ReactElement {
    return (
        <div className={cx('list-box', className)} style={style}>
            <div className={cx('header')}>
                <div className={cx('title')}>{title}</div>
                <div className={cx('more')}>모두 보기</div>
            </div>

            <div className={cx('content')} style={contentStyle}>
                {children}
            </div>
        </div>
    );
}
