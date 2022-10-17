import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';

import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

const Header: React.FC = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="logo">
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm tài khoản và video" />
                    <button className={cx('clear')}>
                        <Icon icon="pajamas:clear" />
                    </button>
                    <Icon className={cx('loading')} icon="eos-icons:bubble-loading" />
                    <button className={cx('search-btn')}>
                        <Icon icon="carbon:search" />
                    </button>
                </div>
                <div className={cx('action')}>
                    <div className={cx('upload')}>
                        <Icon className={cx('upload-ic')} icon="akar-icons:plus" />
                        <h4>Upload</h4>
                    </div>
                    <div className={cx('messenger')}>
                        <button className={cx('msg-btn')}>
                            <Icon icon="uil:message" width="26" height="26" />
                        </button>
                    </div>
                    <div className={cx('mail')}>
                        <button className={cx('mail-btn')}>
                            <Icon icon="bx:message-minus" width="26" height="26" />
                        </button>
                    </div>
                    <div className={cx('profile')}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
