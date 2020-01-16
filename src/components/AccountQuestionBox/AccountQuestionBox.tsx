import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountQuestionBox.scss';

const cx = classNames.bind(styles);

export default function AccountQuestionBox(): React.ReactElement {
    return (
        <div className={cx('account-question-box')}>
            <p className={cx('question-link')}>
                계정이 없으신가요? <a href="#">가입하기</a>
            </p>
        </div>
    );
}
