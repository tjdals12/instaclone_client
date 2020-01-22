import React from 'react';
import { Wrapper } from 'components/common';
import HomeBackground from 'components/HomeBackground';
import JoinBox from 'components/JoinBox';
import AccountQuestionBox from 'components/AccountQuestionBox';
import AppDownloaddLinkBox from 'components/AppDownloadLinksBox';

export default function HomePage(): React.ReactElement {
    return (
        <Wrapper center direction="row" size="md">
            <HomeBackground />

            <Wrapper size="xs">
                <JoinBox />
                <AccountQuestionBox type="join" />
                <AppDownloaddLinkBox />
            </Wrapper>
        </Wrapper>
    );
}
