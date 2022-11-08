import './FormRegister.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from '~/assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
function FormRegister() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordX2, setPasswordX2] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== password) {
                return false;
            }
            return true;
        });
    });

    const handleSubmit = async (e) => {
        try {
            const res = await axios.post('http://localhost:3001/user/register', {
                name,
                username,
                password,
            });
            if (res.data.register) {
                navigate('/login');
            }
            alert(res.data.msg);
        } catch (err) {
            console.log('Register failed: ' + err.message);
        }
    };

    return (
        <div className="register__wrapper">
            <div className="wrapper__left">
                <ValidatorForm className="wrapper__left-content" onSubmit={handleSubmit}>
                    <div className="login__wrapper--home">
                        <Link to="/">
                            <IconButton aria-label="delete" size="large" color="secondary">
                                <HomeIcon />
                            </IconButton>
                        </Link>
                    </div>
                    <div className="header_wrapper">
                        <Typography variant="h4" className="register__header">
                            Đăng ký
                        </Typography>
                    </div>

                    <TextValidator
                        className="register__input"
                        fullWidth
                        value={name}
                        id="register-name"
                        label="Tên người dùng"
                        variant="standard"
                        color="secondary"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập tên người dùng']}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextValidator
                        className="register__input"
                        fullWidth
                        value={username}
                        type="email"
                        id="register-user"
                        label="Email"
                        variant="standard"
                        color="secondary"
                        validators={['required', 'isEmail']}
                        errorMessages={['Vui lòng nhập email', 'Email không hợp lệ']}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextValidator
                        className="register__input"
                        type="password"
                        value={password}
                        autoComplete="off"
                        fullWidth
                        id="register-password"
                        label="Mật khẩu"
                        variant="standard"
                        color="secondary"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập mật khẩu']}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextValidator
                        className="register__input"
                        type="password"
                        fullWidth
                        value={passwordX2}
                        autoComplete="off"
                        id="register-password-X2"
                        label="Nhập lại mật khẩu"
                        variant="standard"
                        color="secondary"
                        validators={['isPasswordMatch', 'required']}
                        errorMessages={['Nhập lại mật khẩu không chính xác', 'Vui lòng nhập mật khẩu']}
                        onChange={(e) => setPasswordX2(e.target.value)}
                    />

                    <Button
                        className="register__btn btn-grad"
                        fullWidth
                        type="submit"
                        size="large"
                        color="secondary"
                        variant="contained"
                        startIcon={<SendIcon />}
                    >
                        Đăng ký
                    </Button>
                    <Link className="register__btn-login " to="/login">
                        Đăng nhập
                    </Link>
                </ValidatorForm>
            </div>

            <div className="wrapper__right">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default FormRegister;
