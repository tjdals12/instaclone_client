import React from 'react';
import classNames from 'classnames/bind';
import { SocialButton, Separator, Wrapper, Logo } from 'components/common';
import LoginForm from 'components/LoginForm';
import styles from './LoginBox.module.scss';

const cx = classNames.bind(styles);

export default function LoginBox(): React.ReactElement {
    return (
        <Wrapper className={cx('login-box')} center size="xs">
            <Logo />
            <LoginForm />
            <Separator>또는</Separator>
            <SocialButton provider="facebook" />

            <p className={cx('password-find')}>비빌번호를 잊으셨나요?</p>
        </Wrapper>
    );
}
