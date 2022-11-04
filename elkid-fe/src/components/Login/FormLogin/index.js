import './FormLogin.scss';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

import logo from '~/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function FormLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3001/', { username, password });
        console.log(res);
    };

    console.log(username, password);
    return (
        <div className="login__wrapper">
            <div className="wrapper__left">
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            '& > :not(style)': { mt: 5, display: 'flex' },
                        }}
                        className="wrapper__left-content"
                        spellCheck="false"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography variant="h4" className="login__header">
                            Đăng nhập
                        </Typography>
                        <TextField
                            className="login__input"
                            value={username}
                            fullWidth
                            id="login-user"
                            label="Tài khoản"
                            variant="standard"
                            color="secondary"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            className="login__input"
                            value={password}
                            type="password"
                            fullWidth
                            id="login-password"
                            label="Mật khẩu"
                            variant="standard"
                            color="secondary"
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
                    </Box>
                </form>
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
