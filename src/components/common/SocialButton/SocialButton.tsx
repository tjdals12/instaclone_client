import React from 'react';
import classNames from 'classnames/bind';
import { FaGoogle, FaGithub, FaFacebookSquare } from 'react-icons/fa';
import styles from './SocialButton.module.scss';

const cx = classNames.bind(styles);

type SocialButtonProps = {
    className?: string;
    provider: 'google' | 'facebook' | 'github';
    fill?: boolean;
    onClick?: () => void;
};

const ProviderIcon = {
    google: { icon: FaGoogle, text: 'Google로 로그인' },
    facebook: { icon: FaFacebookSquare, text: 'Facebook으로 로그인' },
    github: { icon: FaGithub, text: 'Facebook로 로그인' },
};

export default function SocialButton({
    className,
    provider,
    fill,
    onClick,
}: SocialButtonProps): React.ReactElement {
    const classes = cx(
        'social-button',
        className,
        provider,
        fill ? 'fill' : '',
    );
    const { icon: Icon, text } = ProviderIcon[provider];

    return (
        <button className={classes} onClick={onClick}>
            <Icon size={17} />
            <span>{text}</span>
        </button>
    );
}
