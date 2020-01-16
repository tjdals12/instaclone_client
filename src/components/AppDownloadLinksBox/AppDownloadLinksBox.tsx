import React from 'react';
import classNames from 'classnames/bind';
import AppStore from 'assets/img/app_store.png';
import GPstore from 'assets/img/gp_store.png';
import styles from './AppDownloadLinksBox.module.scss';

const cx = classNames.bind(styles);

export default function AppDownloadLinksBox(): React.ReactElement {
    return (
        <div className={cx('app-download-links-box')}>
            <p className={cx('description')}>앱을 다운로드하세요.</p>
            <div className={cx('links')}>
                <a className={cx('link')} href="#" target="_blank">
                    <img src={AppStore} alt="App Store에서 다운로드 하기" />
                </a>
                <a className={cx('link')} href="#" target="_blank">
                    <img src={GPstore} alt="Google Play에서 다운로드 하기" />
                </a>
            </div>
        </div>
    );
}
