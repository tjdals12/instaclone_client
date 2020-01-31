import React from 'react';
import classNames from 'classnames/bind';
import { Wrapper, Description } from 'components/common';
import UserCard from 'components/UserCard';
import User from 'assets/img/user.jpeg';
import { MdMoreHoriz } from 'react-icons/md';
import Feed from 'assets/img/feed.jpg';
import Feed1 from 'assets/img/feed1.jpg';
import Feed2 from 'assets/img/feed2.jpg';
import Slider from 'components/Slider';
import styles from './FeedList.module.scss';
import CommentList from './CommentList';
import Toolbar from './Toolbar';

const cx = classNames.bind(styles);

const comments = [
    {
        writer: 'kai',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
        writer: 'monika',
        content: 'Maecenas sagittis rhoncus neque, eget ultrices urna.',
    },
];

const images = [Feed, Feed1, Feed2];

export default function FeedList(): React.ReactElement {
    return (
        <Wrapper direction="column" className={cx('feed-list')} size="sm">
            <div className={cx('feed-item')}>
                <div className={cx('header')}>
                    <UserCard
                        thumbnail={User}
                        size="xs"
                        title="eunjin__a"
                        subTitle="한강 나들이"
                        type="feed"
                    />

                    <MdMoreHoriz size={20} />
                </div>

                <Slider images={images} nav="outer" />

                <Toolbar />

                <div className={cx('footer')}>
                    <p className={cx('like-count')}>좋아요 156개</p>

                    <div className={cx('description')}>
                        <Description
                            title="eunjin__a"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing"
                        />
                        <span className={cx('content-more')}>더 보기</span>
                    </div>

                    <button className={cx('comment-more')}>
                        댓글 7개 모두 보기
                    </button>

                    <CommentList comments={comments} />

                    <p className={cx('timestamp')}>7시간 전</p>
                </div>
            </div>
        </Wrapper>
    );
}
