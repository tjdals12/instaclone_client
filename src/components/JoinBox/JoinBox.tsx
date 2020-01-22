import React from 'react';
import classNames from 'classnames/bind';
import { Wrapper, Logo, SocialButton, Separator } from 'components/common';
import JoinForm from 'components/JoinForm';
import styles from './JoinBox.module.scss';

const cx = classNames.bind(styles);

export default function JoinBox(): React.ReactElement {
    return (
        <Wrapper className={cx('join-box')} center size="xs">
            <Logo />

            <p className={cx('inform')}>
                친구들의 사진과 동영상을 보려면 가입하세요.
            </p>

            <SocialButton provider="facebook" fill />
            <Separator>또는</Separator>
            <JoinForm />

            <p className={cx('policy')}>
                가입하면 Instagram의 <strong>약관</strong>,{' '}
                <strong>데이터 정책</strong> 및 <strong>쿠키 정책</strong>에
                동의하게 됩니다.
            </p>
        </Wrapper>
    );
}
