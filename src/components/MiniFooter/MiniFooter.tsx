import React from 'react';
import classNames from 'classnames/bind';
import styles from './MiniFooter.module.scss';

const cx = classNames.bind(styles);

const NavItems = [
    { href: '#', name: 'Instagram 정보' },
    { href: '#', name: '도움말' },
    { href: '#', name: '홍보 센터' },
    { href: '#', name: 'API' },
    { href: '#', name: '채용 정보' },
    { href: '#', name: '개인정보처리방침' },
    { href: '#', name: '약관' },
    { href: '#', name: '디렉터리' },
    { href: '#', name: '프로필' },
    { href: '#', name: '해시태그' },
    { href: '#', name: '언어' },
];

export default function MiniFooter(): React.ReactElement {
    return (
        <div className={cx('mini-footer')}>
            <ul className={cx('mini-footer-nav')}>
                {NavItems.map(({ href, name }, index) => (
                    <li className={cx('mini-footer-nav-item')} key={index}>
                        <a className={cx('link')} href={href} target="_blanck">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className={cx('copyright')}>
                <p className={cx('text')}>© 2020 INSTAGRAM</p>
            </div>
        </div>
    );
}
