import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

type InputProps = {
    className?: string;
    placeholder: string;
    type: string;
    name: string;
    onChange: () => void;
};

export default function Input({
    className,
    placeholder,
    type,
    name,
    onChange,
}: InputProps): React.ReactElement {
    const [hasText, setHasText] = useState(false);
    const [isFocus, setFocus] = useState(false);

    const handleHasText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;

        setHasText(!!value);
        onChange();
    };

    return (
        <div
            className={cx(
                'custom-input',
                className,
                isFocus ? 'focus' : '',
                hasText ? 'has-text' : '',
            )}
        >
            <label>
                <span className={cx('placeholder')}>{placeholder}</span>
                <input
                    className={cx('input')}
                    type={type}
                    name={name}
                    onChange={handleHasText}
                    onFocus={(): void => setFocus(true)}
                    onBlur={(): void => setFocus(false)}
                    autoComplete="off"
                />
            </label>
        </div>
    );
}
