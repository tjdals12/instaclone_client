import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Wrapper } from 'components/common';
import styles from './AccountQuestionBox.scss';

const cx = classNames.bind(styles);

type AccountQuestionBoxProps = {
    type: string;
};

export default function AccountQuestionBox({
    type,
}: AccountQuestionBoxProps): React.ReactElement {
    return (
        <Wrapper center size="xs" className={cx('account-question-box')}>
            <p className={cx('question-link')}>
                계정이 {type === 'join' ? '있으신가요' : '없으신가요'}?{' '}
                <Link to={`/accounts/${type === 'join' ? 'login' : 'join'}`}>
                    {type === 'join' ? '로그인' : '가입하기'}
                </Link>
            </p>
        </Wrapper>
    );
}
