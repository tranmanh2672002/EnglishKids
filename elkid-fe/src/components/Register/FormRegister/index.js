import './FormRegister.scss';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';

import logo from '~/assets/images/logo.png';
import { Link } from 'react-router-dom';
function FormRegister() {
    return (
        <div className="register__wrapper">
            <div className="wrapper__left">
                <form>
                    <Box
                        sx={{
                            '& > :not(style)': { mt: 4, display: 'flex' },
                        }}
                        className="wrapper__left-content"
                        spellCheck="false"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="header_wrapper">
                            <Typography variant="h4" className="register__header">
                                Đăng ký
                            </Typography>
                            <Typography variant="h5" className="register__header">
                                <Link style={{ color: '#9c27b0' }} to="/login">
                                    Đăng nhập
                                </Link>
                            </Typography>
                        </div>

                        <TextField
                            className="register__input"
                            fullWidth
                            id="register-name"
                            label="Tên người dùng"
                            variant="standard"
                            color="secondary"
                        />
                        <TextField
                            className="register__input"
                            fullWidth
                            id="register-user"
                            label="Tài khoản"
                            variant="standard"
                            color="secondary"
                        />
                        <TextField
                            className="register__input"
                            type="password"
                            autoComplete='off'
                            fullWidth
                            id="register-password"
                            label="Mật khẩu"
                            variant="standard"
                            color="secondary"
                        />

                        <TextField
                            className="register__input"
                            type="password"
                            fullWidth
                            autoComplete='off'
                            id="register-password-x2"
                            label="Nhập lại mật khẩu"
                            variant="standard"
                            color="secondary"
                        />

                        <Button
                            className="register__btn"
                            fullWidth
                            type="submit"
                            size="large"
                            color="secondary"
                            variant="contained"
                            startIcon={<SendIcon />}
                        >
                            Đăng ký
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

export default FormRegister;
