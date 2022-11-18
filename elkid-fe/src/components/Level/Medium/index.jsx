import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './Medium.scss';


function MediumLevel() {
    return <div className="MediumLevel__wrapper">
        <div className="MediumLevel__container">
                    <div className="MediumLevel__nav">
                        <Link to="/app/exam">
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
                    
                </div>
    </div>;
}

export default MediumLevel;
