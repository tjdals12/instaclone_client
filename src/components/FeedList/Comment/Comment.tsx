import React from 'react';
import classNames from 'classnames/bind';
import { FaRegHeart } from 'react-icons/fa';
import { Description } from 'components/common';
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
            <Description title={writer} content={content} />
            <FaRegHeart className={cx('like')} />
        </li>
    );
}
