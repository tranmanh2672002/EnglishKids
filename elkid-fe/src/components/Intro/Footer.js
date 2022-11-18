import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    background: 'var(--primary-color)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#ccc',
    boxShadow: 'none',
}));


export default function Footer() {

    return (
        <div id="footer">
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                display="flex"
                justifyContent={'center'}
            >
                <Item>
                    <Typography variant="h6"> Giới thiệu</Typography>
                    <ul>
                        <li>Phương pháp</li>
                        <li>Khoá học</li>
                        <li>Công việc</li>
                        <li>Truyền thông</li>
                        <li>Liên hệ với chúng tôi</li>
                    </ul>
                </Item>
                <Item>
                    <Typography variant="h6">Hỏi & Đáp EnglishKids</Typography>
                    <ul>
                        <li>Hỏi & Đáp Englishkids</li>
                        <li>Hỏi & Đáp Englishkids Test</li>
                        <li>Tình trạng</li>
                    </ul>
                </Item>
                <Item>
                    <Typography variant="h6">Quyền riêng tư và điều khoản</Typography>
                    <ul>
                        <li>Nội quy diễn đàn</li>
                        <li>Điều khoản</li>
                        <li>Quyền riêng tư</li>
                    </ul>
                </Item>
                <Item>
                    <Typography variant="h6">Mạng xã hội</Typography>
                    <ul>
                        <li>Blog</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </Item>
            </Stack>
            {/* scroll */}

        </div>

    );
}

