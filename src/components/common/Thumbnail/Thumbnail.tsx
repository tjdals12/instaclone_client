import React from 'react';
import classNames from 'classnames/bind';
import styles from './Thumbnail.module.scss';

const cx = classNames.bind(styles);

type ThumbnailProps = {
    src: string;
    size: 'md' | 'sm' | 'xs';
};

export default function Thumbnail({
    src,
    size,
}: ThumbnailProps): React.ReactElement {
    return (
        <div className={cx('thumbnail')}>
            <img className={cx('img', size)} src={src} alt="User" />
        </div>
    );
}
