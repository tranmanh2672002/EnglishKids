import './LearnImg.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

function LearnImg() {
    const { id } = useParams();
    const [imagesArray, setImagesArray] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/course/images/${id}`);
                setImagesArray(res.data.imageArray);
            } catch (err) {
                console.error('fe: ' + err.message);
            }
        };
        getData();
    }, [id]);

    console.log(imagesArray);

    return (
        <>
            <div className="LearnImg__wrapper">
                <div className="LearnImg__container">
                    <div className="LearnImg__nav">
                        <Link to={`/app/selection/${id}`}>
                            <IconButton aria-label="delete" size="large" color="secondary">
                                <ArrowBackIcon />
                            </IconButton>
                        </Link>
                        <Link to="/app" style={{ marginRight: '-30px' }}>
                            <IconButton aria-label="delete" size="large" color="secondary">
                                <HomeIcon />
                            </IconButton>
                        </Link>
                    </div>
                    <div id="style-2" className="LearnImg__content">
                        {imagesArray.length ? (
                            imagesArray.map((image) => {
                                return (
                                    <div className="LearnImg__item">
                                        <input type="image" src={image.link} alt="image" />
                                    </div>
                                );
                            })
                        ) : (
                            <h2>Not found</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LearnImg;
