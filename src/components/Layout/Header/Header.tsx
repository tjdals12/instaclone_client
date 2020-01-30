import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
    FaInstagram,
    FaRegCompass,
    FaRegHeart,
    FaRegUser,
} from 'react-icons/fa';
import SearchBar from 'components/SearchBar';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const NavItems = [
    { to: '#', icon: FaRegCompass },
    { to: '#', icon: FaRegHeart },
    { to: '#', icon: FaRegUser },
];

export default function Header(): React.ReactElement {
    return (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <Link className={cx('header-logo')} to="/main">
                    <FaInstagram className={cx('icon')} />
                    <div className={cx('separator')} />
                    <h1 className={cx('text')}>Instagram</h1>
                </Link>

                <SearchBar className={cx('search-bar')} />

                <nav className={cx('header-nav')}>
                    <ul className={cx('header-nav-content')}>
                        {NavItems.map(({ to, icon: Icon }, index) => (
                            <li key={index} className={cx('header-nav-item')}>
                                <Link to={to}>
                                    <Icon className={cx('icon')} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
