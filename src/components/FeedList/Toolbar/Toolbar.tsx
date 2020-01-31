import React from 'react';
import classNames from 'classnames/bind';
import {
    FaRegHeart,
    FaRegComment,
    FaRegPaperPlane,
    FaRegBookmark,
} from 'react-icons/fa';
import styles from './Toolbar.module.scss';

const cx = classNames.bind(styles);

export default function Toolbar(): React.ReactElement {
    return (
        <div className={cx('toolbar')}>
            <ul className={cx('icons', 'left')}>
                <li className={cx('item')}>
                    <FaRegHeart size={25} />
                </li>

                <li className={cx('item')}>
                    <FaRegComment size={25} />
                </li>

                <li className={cx('item')}>
                    <FaRegPaperPlane size={25} />
                </li>
            </ul>

            <ul className={cx('icons', 'right')}>
                <li className={cx('item')}>
                    <FaRegBookmark size={25} />
                </li>
            </ul>
        </div>
    );
}
