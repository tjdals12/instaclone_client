import React from 'react';
import classNames from 'classnames/bind';
import Header from 'components/Layout/Header';
import Content from 'components/Layout/Content';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function MainLayout({
    children,
}: MainLayoutProps): React.ReactElement {
    return (
        <main className={cx('main-layout')}>
            <Header />
            <Content>{children}</Content>
        </main>
    );
}
