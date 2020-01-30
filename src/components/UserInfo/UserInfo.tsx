import React from 'react';
import classNames from 'classnames/bind';
import { Wrapper } from 'components/common';
import User from 'assets/img/user.jpeg';
import OtherUser1 from 'assets/img/user-1.png';
import OtherUser2 from 'assets/img/user-2.png';
import OtherUser3 from 'assets/img/user-3.png';
import UserCard from 'components/UserCard';
import ListBox from 'components/ListBox';
import MiniFooter from 'components/MiniFooter';
import styles from './UserInfo.module.scss';

const cx = classNames.bind(styles);

export default function UserInfo(): React.ReactElement {
    return (
        <Wrapper direction="column" size="xs" className={cx('user-info')}>
            <UserCard
                thumbnail={User}
                size="md"
                title="crushlv1206"
                subTitle="obious"
            />

            <ListBox
                className={cx('box')}
                title="스토리"
                style={{ minHeight: '165px' }}
            >
                <UserCard
                    thumbnail={OtherUser1}
                    size="sm"
                    title="sojuyeon_"
                    subTitle="22시간 전"
                    type="story"
                />
            </ListBox>

            <ListBox className={cx('box')} title="회원님을 위한 추천">
                <UserCard
                    thumbnail={OtherUser1}
                    size="xs"
                    title="sojuyeon_"
                    subTitle="회원님을 팔로우합니다"
                    type="recommends"
                />

                <UserCard
                    thumbnail={OtherUser2}
                    title="sojuyeon_"
                    size="xs"
                    subTitle="회원님을 팔로우합니다"
                    type="recommends"
                />

                <UserCard
                    thumbnail={OtherUser3}
                    title="sojuyeon_"
                    size="xs"
                    subTitle="회원님을 팔로우합니다"
                    type="recommends"
                />
            </ListBox>

            <MiniFooter />
        </Wrapper>
    );
}
