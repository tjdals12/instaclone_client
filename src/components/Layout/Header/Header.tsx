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

export default function Header(): React.ReactElement {
    return (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <Link className={cx('header-logo')} to="/main">
                    <FaInstagram />
                    <div className={cx('separator')} />
                    <h1 className={cx('logo-text')}>Instagram</h1>
                </Link>

                <SearchBar className={cx('search-bar')} />

                <nav className={cx('header-nav')}>
                    <ul className={cx('header-nav-content')}>
                        <li className={cx('header-nav-item')}>
                            <FaRegCompass />
                        </li>
                        <li className={cx('header-nav-item')}>
                            <FaRegHeart />
                        </li>
                        <li className={cx('header-nav-item')}>
                            <FaRegUser />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
