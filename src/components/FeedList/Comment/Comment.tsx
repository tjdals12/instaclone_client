import React from 'react';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

type CommentProps = {
    writer: string;
    content: string;
};

export default function Comment({
    writer,
    content,
}: CommentProps): React.ReactElement {
    return (
        <li className={cx('comment')}>
            <span className={cx('text')}>
                <strong className={cx('writer')}>{writer}</strong> {content}
            </span>
            <FaRegHeart className={cx('like')} />
        </li>
    );
}
