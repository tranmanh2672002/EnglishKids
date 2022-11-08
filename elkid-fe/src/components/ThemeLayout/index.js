import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import './ThemeLayout.scss';
import logo from '~/assets/images/logo.png';

function ThemeLayout() {
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
                    </div>
                    <div className="Theme__header">Chọn chủ đề </div>
                    <div id='style-2' className="Theme__courses">
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        <Link to="" className="Theme__course">
                            <div className="Theme__course--thumbnail">
                                <img alt="thumbnail" src={logo} />
                            </div>
                            <div className="Theme__course--content">
                                <span className="Theme__course--header">School</span>
                                <span className="Theme__course--description">Vocabulary about school</span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThemeLayout;
