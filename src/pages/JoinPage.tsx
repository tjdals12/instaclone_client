import React from 'react';
import { Wrapper } from 'components/common';
import JoinBox from 'components/JoinBox';
import AccountQuestionBox from 'components/AccountQuestionBox';
import AppDownloadLinksBox from 'components/AppDownloadLinksBox';

export default function JoinPage(): React.ReactElement {
    return (
        <Wrapper center size="xs">
            <JoinBox />
            <AccountQuestionBox type="join" />
            <AppDownloadLinksBox />
        </Wrapper>
    );
}
