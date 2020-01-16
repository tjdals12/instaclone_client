import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

type FormProps = {
    onSubmit?: () => void;
    children: React.ReactNode;
};

export default function Form({
    onSubmit = (): void => console.warn('Warning: onSubmit is not defined'),
    children,
}: FormProps): React.ReactElement {
    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();

                onSubmit();
            }}
            className={cx('custom-form')}
        >
            {children}
        </form>
    );
}
