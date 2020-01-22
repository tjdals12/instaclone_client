import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import HomeBackground from 'assets/img/home.png';
import slideImages from 'assets/img/slide';
import styles from './HomeBackground.module.scss';

const cx = classNames.bind(styles);

export default function BackgroundBox(): React.ReactElement {
    return (
        <div
            className={cx('background')}
            style={{
                backgroundImage: `url(${HomeBackground})`,
            }}
        >
            <div className={cx('slide')}>
                {slideImages.map((img, index) => (
                    <img
                        key={index}
                        className={cx(`slide-image`, index !== 1 ? 'hide' : '')}
                        src={img}
                        alt={`슬라이드 이미지${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
