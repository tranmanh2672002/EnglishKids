import './Intro.scss';
import React, { Component } from 'react';

import education from '~/assets/images/education.png';
import communication from '~/assets/images/communication.png';

import skill from '~/assets/images/skill.png';

import Slider from 'react-slick';
import { Button, Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class slider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Box id="slider" >
                <Slider ref={(c) => (this.slider = c)} {...settings} >
                    <Box key={1} >
                        <Box className='slider-box'>
                            <Box className="wrapper-img" >
                                <center>
                                    <img src={education} alt="education" />
                                </center>
                            </Box>
                            <Box className="wrapper-text" >
                                <Typography variant="h3">Chào mừng đến với EngLishKids</Typography>
                                <Typography
                                    variant="p"
                                    className="text-p"
                                >
                                    Khóa học tiếng anh nền tảng cho trẻ từ 3-8 tuổi <br />
                                    theo chuẩn CEFR Châu Âu
                                </Typography>
                                <Box textAlign="center" padding="20px" >
                                    <Link to="/login" cursor='pointer'>
                                        <Button variant="contained" color="secondary" className="button">
                                            Bắt đầu
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box key={3}>
                        <Box className='slider-box'>
                            <Box className="wrapper-img img-skill">
                                <img src={skill} alt="4 skill" />
                            </Box>
                            <Box className="wrapper-text" >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: 'green',
                                    }}
                                >
                                    Phát triển toàn diện với 4 kỹ năng
                                </Typography>
                                <Typography variant="p" className="text-p">
                                    Hình thành phản xạ giao tiếp tự nhiên, phát âm <br />
                                    chuẩn cho trẻ ngay từ khi mới bắt đầu.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box key={2} >
                        <Box className='slider-box'>
                            <Box className="wrapper-img" >
                                <img src={communication} alt="communication" />
                            </Box>
                            <Box className="wrapper-text" >
                                <Typography variant="h3" sx={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>
                                    Phương pháp học tập hiệu quả cho trẻ
                                </Typography>
                                <Typography variant="p" className="text-p">
                                    Học tiếng anh qua hình ảnh bài hát, video<br />
                                    dễ tương tác cho trẻ
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Slider>
                <Stack spacing={2} direction="row" className="prev-next">
                    <Box variant="outlined" onClick={this.previous} className="prev">
                        <ArrowBackIosNewIcon />
                    </Box>
                    <Box variant="outlined" href="#contained-buttons" onClick={this.next} className="next">
                        <ArrowForwardIosIcon />
                    </Box>
                </Stack>
            </Box>
        );
    }
}
