import React from 'react';
import { Wrapper } from 'components/common';
import LoginBox from 'components/LoginBox';
import AccountQuestionBox from 'components/AccountQuestionBox';
import AppDownloadLinksBox from 'components/AppDownloadLinksBox';

export default function LoginPage(): React.ReactElement {
    return (
        <Wrapper center size="xs">
            <LoginBox />
            <AccountQuestionBox />
            <AppDownloadLinksBox />
        </Wrapper>
    );
}
