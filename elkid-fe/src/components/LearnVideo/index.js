import './LearnVideo.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function LearnVd() {
    const { id } = useParams();

    const [course, setCourse] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/course/video/${id}`);
                setCourse(res.data);
            } catch (err) {
                console.error('fe: ' + err.message);
            }
        };
        getData();
    }, [id]);

    return (
        <>
            <div className="LearnVd__wrapper">
                <div className="LearnVd__container">
                    <div className="LearnVd__nav">
                        <Link to={`/app/selection/${id}`}>
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
                    {course.map((item) => {
                        return (
                            <>
                                <div className="LearnVd__title">{item.name}</div>
                                <div className="LearnVd__content">
                                    <iframe
                                        key={item._id}
                                        className="LearnVd__content--video"
                                        width="560"
                                        height="315"
                                        src={item.video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default LearnVd;
