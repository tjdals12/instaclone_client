import React from 'react';
import classNames from 'classnames/bind';
import styles from './CommentList.module.scss';
import Comment from '../Comment';

const cx = classNames.bind(styles);

type CommentListProps = {
    comments: Array<{
        writer: string;
        content: string;
    }>;
};

export default function CommentList({
    comments,
}: CommentListProps): React.ReactElement {
    return (
        <ul className={cx('comment-list')}>
            {comments.map(({ writer, content }, index) => (
                <Comment key={index} writer={writer} content={content} />
            ))}
        </ul>
    );
}
