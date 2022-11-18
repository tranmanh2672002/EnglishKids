import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './AppBar.scss';
import { Link } from 'react-router-dom';

export default function HeaderAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' className="appBar">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        EngLish Kids
                    </Typography>
                    <Link className="appBar__link" to="/register">
                        <Button color="inherit" sx={{ marginRight: '20px' }}>
                            Đăng ký
                        </Button>
                    </Link>
                    <Link className="appBar__link" to="/login">
                        <Button color="inherit">Đăng nhập</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
