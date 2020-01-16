import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const NavItems = [
    { href: '#', name: 'INSTAGRAM 정보' },
    { href: '#', name: 'HELP' },
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

export default function Footer(): React.ReactElement {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-content')}>
                <nav className={cx('footer-nav')}>
                    <ul className={cx('footer-nav-content')}>
                        {NavItems.map(({ href, name }, index) => (
                            <li key={index} className={cx('footer-nav-item')}>
                                <a
                                    className={cx('footer-nav-item-link')}
                                    href={href}
                                    target="_blanck"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <span className={cx('footer-copyright')}>
                    © 2020 Instagram from Facebook
                </span>
            </div>
        </footer>
    );
}
