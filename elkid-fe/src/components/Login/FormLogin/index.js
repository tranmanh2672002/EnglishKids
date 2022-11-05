import './FormLogin.scss';
import { Button, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from '~/assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function FormLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:3001/user/login', { username, password });
            if (res.data.login) {
                setUsername('');
                setPassword('');
                localStorage.setItem('login', 'true');
                navigate('/app');
            } else {
                alert(res.data.msg);
            }
        } catch (err) {
            console.log('Login fe failed: ' + err.message);
        }
    };

    return (
        <div className="login__wrapper">
            <div className="wrapper__left">
                <ValidatorForm className="wrapper__left-content" onSubmit={handleSubmit}>
                    <Typography variant="h4" className="login__header">
                        Đăng nhập
                    </Typography>
                    <TextValidator
                        className="login__input"
                        value={username}
                        type="email"
                        fullWidth
                        id="login-user"
                        label="Email"
                        variant="standard"
                        color="secondary"
                        validators={['required', 'isEmail']}
                        errorMessages={['Vui lòng nhập email', 'Email không hợp lệ']}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextValidator
                        className="login__input"
                        value={password}
                        type="password"
                        autoComplete="off"
                        fullWidth
                        id="login-password"
                        label="Mật khẩu"
                        variant="standard"
                        color="secondary"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập mật khẩu']}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="formLogin__link">
                        <Link className="formLogin__link-separate" to="/register">
                            Đăng ký
                        </Link>
                        <Link to="">Quên mật khẩu?</Link>
                    </div>

                    <Button
                        className="login__btn"
                        fullWidth
                        type="submit"
                        size="large"
                        color="secondary"
                        variant="contained"
                        startIcon={<SendIcon />}
                    >
                        Đăng nhập
                    </Button>
                </ValidatorForm>
            </div>

            <div className="wrapper__right">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div>
                <Link to="/">
                    <IconButton aria-label="delete" size="large" color="secondary">
                        <HomeIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default FormLogin;
