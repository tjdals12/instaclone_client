import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

type SearchInputProps = {
    className: string;
};

export default function SearchInput({
    className,
}: SearchInputProps): React.ReactElement {
    const inputRef = useRef<HTMLInputElement>();
    const [isFocus, setFocus] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');

    const handleFocus = (): void => inputRef.current.focus();

    return (
        <div className={cx('search-bar', className)}>
            <div
                className={cx('search-bar-icon', isFocus ? 'focus' : '')}
                onClick={handleFocus}
            >
                <FaSearch className={cx('icon')} />
                <div className={cx('text')}>
                    {keyword === '' ? '검색' : keyword}
                </div>
            </div>

            <input
                type="text"
                className={cx('search-bar-input', isFocus ? 'focus' : '')}
                ref={inputRef}
                onFocus={(): void => setFocus(true)}
                onBlur={(): void => setFocus(false)}
                onChange={(e): void => setKeyword(e.target.value)}
                value={isFocus ? keyword : ''}
                placeholder={isFocus ? '검색' : ''}
            />
        </div>
    );
}
