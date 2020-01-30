import React from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

type SliderProps = {
    images: Array<string>;
};

export default function Slider({ images }: SliderProps): React.ReactElement {
    return (
        <div className={cx('slider')}>
            <ul
                className={cx('slides')}
                style={{ width: `${615 * images.length}px` }}
            >
                {images.map((img, index) => (
                    <li key={index} className={cx('slide')}>
                        <img
                            className={cx('img')}
                            src={img}
                            alt={`Feed${index}`}
                            style={{ width: '615px', height: '615px' }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
