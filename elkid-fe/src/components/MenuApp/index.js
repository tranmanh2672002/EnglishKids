import { Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './MenuApp.scss';
import DefaultAvatar from '~/assets/images/defaultAvatar.png';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

function MenuApp() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const navigate = useNavigate();

    const handleClickLogout = () => {
        localStorage.setItem('login', 'false');
        navigate('/');
    };

    return (
        <>
            <div className="App__wrapper">
                <div className="App__background">
                    <Tippy
                        interactive
                        visible={visible}
                        onClickOutside={hide}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="App__user--selection" tabIndex="-1" {...attrs}>
                                <ul>
                                    <li onClick={handleClickLogout}>Đăng xuất</li>
                                    <li onClick={handleClickLogout}>Đăng xuất</li>
                                </ul>
                            </div>
                        )}
                    >
                        <Avatar
                            onClick={visible ? hide : show}
                            className="App__list--avatar"
                            alt="Avatar"
                            src={DefaultAvatar}
                        />
                    </Tippy>
                    <div className="App__list">
                        <div className="App__header">English Kids</div>
                        <div className="App__content">
                            <Link to="/app/learn" className="App__Item btn-grad">
                                Chọn chủ đề
                            </Link>
                            <Link to="/app/exam" className="App__Item btn-grad">
                                Bài kiểm tra
                            </Link>
                            <Link to="/app/rank" className="App__Item btn-grad">
                                Xếp hạng
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuApp;
