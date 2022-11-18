import React from 'react';

import tick from '~/assets/images/tick.png';
import motivation from '~/assets/images/motivation.png';
import fun from '~/assets/images/fun.png';
import effective from '~/assets/images/effective.png';
import top from '~/assets/images/top.png';
import picwish from '~/assets/images/picwish.png';
import Stack from '@mui/material/Stack';
import course from '~/assets/images/course.png';
import desktop from '~/assets/images/desktop.png';
import { Box, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));
// boder
const defaultProps = {
    m: 1,
    style: { width: '100%', height: '5rem' },
    borderColor: '#ccc',
};
export default function Main() {
    return (
        <div id="main">
            <Box sx={{ padding: '50px' }}>
                {/* conten */}
                <Box>
                    {/* <Box borderTop={1} {...defaultProps} /> */}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    >
                        Tại sao bạn nên học cùng EnglishKids
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Item>
                            <Box sx={{ textAlign: 'left' }}>
                                <Box display="flex">
                                    <img src={effective} className="icon" alt="effective"></img>
                                    <Box>
                                        <Typography variant="h6"> Thực sự hiệu quả </Typography>
                                        <Typography variant="p">
                                            Các khóa học của chúng tôi giảng dạy một cách hiệu quả các kỹ năng nghe, đọc
                                            và viết. Bạn có thể xem nghiên cứu khoa học mới nhất của chúng tôi!
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex">
                                    <img src={tick} className="icon" alt="tick"></img>
                                    <Box>
                                        <Typography variant="h6">Cá nhân hóa trải nghiệm học tập </Typography>
                                        <Typography variant="p">
                                            Sự kết hợp hoàn hảo giữa trí thông minh nhân tạo (AI) và khoa học ngôn ngữ,
                                            tạo ra các bài học cá nhân hóa giúp mọi người học ở đúng tiến độ và cấp độ
                                            phù hợp.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>
                        <Item>
                            <Box>
                                <center>
                                    <img src={desktop} alt="desktop"></img>
                                </center>
                            </Box>
                        </Item>
                        <Item>
                            <Box sx={{ textAlign: 'left' }}>
                                <Box display="flex">
                                    <img src={motivation} className="icon" alt="motivation"></img>
                                    <Box>
                                        <Typography variant="h6">Truyền động lực học</Typography>
                                        <Typography variant="p">
                                            Chúng tôi giúp người học dễ dàng xây dựng thói quen học tập, qua những tính
                                            năng mô phỏng trò chơi, các thử thách vui vẻ, và nhắc nhở từ chú cú thân
                                            thiện - cú Duo.
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box display="flex">
                                    <img src={fun} className="icon" alt="fun"></img>
                                    <Box>
                                        <Typography variant="h6">Học thật vui!</Typography>
                                        <Typography variant="p">
                                            Học hiệu quả mà không nhàm chán! Xây dựng kỹ năng mỗi ngày với các bài học
                                            thú vị cùng các nhân vật ngộ nghĩnh.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>
                    </Stack>
                </Box>
                <Box>
                    <Box borderTop={1} {...defaultProps} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Item>
                                    {' '}
                                    <center>
                                        <img src={top} alt="top"></img>
                                    </center>
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5">English là ngôn ngữ hàng đầu thế giới </Typography>
                                        <Typography variant="p" fontSize={15}>
                                            Học cùng EnglishKids rất vui nhộn, và đã có các nghiên cứu đã chứng minh
                                            tính hiệu quả! Với các bài học nhỏ gọn, bạn có thể vừa ghi điểm và mở khóa
                                            các cấp độ mới vừa luyện tập các kỹ năng giao tiếp hữu dụng.
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* sfsf */}
                </Box>
                <Box>
                    <Box borderTop={1} {...defaultProps} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5">Tăng tốc học tập cùng Super EnglishKids</Typography>
                                        <Typography variant="p" fontSize={15}>
                                            Học ngoại ngữ trên EnglishKids hoàn toàn miễn phí, nhưng bạn có thể gỡ bỏ
                                            mọi quảng cáo và hỗ trợ giáo dục miễn phí khi sử dụng Super. Tặng bạn 2 tuần
                                            đầu tiên nè!
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    {' '}
                                    <center>
                                        <img src={picwish} alt="picwish"></img>
                                    </center>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box>
                    <Box borderTop={1} {...defaultProps} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Item>
                                    {' '}
                                    <center>
                                        <img src={course} alt="course"></img>
                                    </center>
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5">Các khóa học thực sự hiệu quả </Typography>
                                        <Typography variant="p" fontSize={15}>
                                            Các khóa học của chúng tôi thực sự hiệu quả trong việc giảng dạy kỹ năng
                                            nghe, đọc và nói. Hãy xem những nghiên cứu mới nhất của chúng tôi!
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* sfsf */}
                </Box>

            </Box>
        </div >
    );
}
