import React from 'react';
import classNames from 'classnames/bind';
import Content from 'components/Layout/Content';
import Footer from 'components/Layout/Footer';
import styles from './AccountLayout.module.scss';

const cx = classNames.bind(styles);

type AccountLayoutProps = {
    children: React.ReactNode;
};

export default function AccountLayout({
    children,
}: AccountLayoutProps): React.ReactElement {
    return (
        <main className={cx('account-layout')}>
            <Content>{children}</Content>
            <Footer />
        </main>
    );
}
