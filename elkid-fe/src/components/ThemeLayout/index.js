import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import './ThemeLayout.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ThemeLayout() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/course');
                setCourses(res.data);
            } catch (err) {
                console.log('fe: ' + err.message);
            }
        };
        getData();
    }, []);

    return (
        <>
            <div className="Theme__wrapper">
                <div className="Theme__container">
                    <div className="Theme__back-btn">
                        <Link to="/app">
                            <IconButton aria-label="delete" size="large" color="secondary">
                                <ArrowBackIcon />
                            </IconButton>
                        </Link>
                        <Link to="/app">
                            <IconButton aria-label="delete" size="large" color="secondary">
                                <HomeIcon />
                            </IconButton>
                        </Link>
                    </div>
                    <div className="Theme__header">Chọn chủ đề </div>
                    <div className="Theme__courses">
                        {courses.length ? (
                            courses.map((course) => {
                                return (
                                    <Link key={course._id} to={`/app/selection/${course._id}`} className="Theme__course">
                                        <div className="Theme__course--thumbnail">
                                            <img alt="thumbnail" src={course.thumbnail} />
                                        </div>
                                        <div className="Theme__course--content">
                                            <span className="Theme__course--header">{course.name}</span>
                                            <span className="Theme__course--description">{course.description}</span>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <h2>no course</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThemeLayout;
