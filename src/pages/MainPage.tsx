import React from 'react';
import { Wrapper } from 'components/common';
import FeedList from 'components/FeedList';
import UserInfo from 'components/UserInfo';

export default function MainPage(): React.ReactElement {
    return (
        <Wrapper direction="row">
            <FeedList />
            <UserInfo />
        </Wrapper>
    );
}
