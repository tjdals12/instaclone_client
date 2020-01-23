import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HomeBackground from 'assets/img/home.png';
import slideImages from 'assets/img/slide';
import styles from './HomeBackground.module.scss';

const cx = classNames.bind(styles);

export default function BackgroundBox(): React.ReactElement {
    const slideRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const slide = slideRef.current.children;

        let i = 0;

        const slideInterval = setInterval(() => {
            slide.item(i).classList.remove(cx('show'));
            slide
                .item(i + 1 === slide.length ? 0 : i + 1)
                .classList.add(cx('show'));
            i += 1;

            if (i === slide.length) i = 0;
        }, 5000);

        return (): void => {
            clearInterval(slideInterval);
        };
    }, []);

    return (
        <div
            className={cx('background')}
            style={{
                backgroundImage: `url(${HomeBackground})`,
            }}
        >
            <div className={cx('slide')} ref={slideRef}>
                {slideImages.map((img, index) => (
                    <img
                        key={index}
                        className={cx(`slide-image`, index === 0 ? 'show' : '')}
                        src={img}
                        alt={`슬라이드 이미지${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
