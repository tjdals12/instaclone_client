import React from 'react';
import classNames from 'classnames/bind';
import { Thumbnail } from 'components/common';
import styles from './UserCard.module.scss';

const cx = classNames.bind(styles);

type UserCardProps = {
    thumbnail: string;
    size: 'md' | 'sm' | 'xs';
    title: string;
    subTitle: string;
    type?: 'story' | 'recommends' | 'feed';
};

export default function UserCard({
    thumbnail,
    size,
    title,
    subTitle,
    type,
}: UserCardProps): React.ReactElement {
    const classes = cx('user-card', type);

    return (
        <div className={classes}>
            <Thumbnail src={thumbnail} size={size} />

            <div className={cx('description')}>
                <h1 className={cx('title')}>{title}</h1>
                <p className={cx('sub-title')}>{subTitle}</p>
            </div>

            {type === 'recommends' && (
                <div className={cx('follow')}>팔로우</div>
            )}
        </div>
    );
}
