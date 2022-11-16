import './Selection.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { Link, useParams } from 'react-router-dom';

function SelectionLearn() {
    const { id } = useParams();
    return (
        <>
            <div className="Selection__wrapper">
                <div className="Selection__container">
                    <div className="Selection__back-btn">
                        <Link to="/app/learn">
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
                    <div className="Selection__header">Chọn hình thức học</div>
                    <div className="Selection__courses">
                        <Link to={`/app/selection/learnImages/${id}`} className="Selection__course">
                            <div className="Selection__course--content">
                                <span className="Selection__course--header">
                                    <ImageIcon className='Selection__course--icon'/>
                                    Hình ảnh
                                </span>
                                <span className="Selection__course--description">Những hình ảnh minh họa chủ đề</span>
                            </div>
                        </Link>

                        <Link to={`/app/selection/learnVideos/${id}`} className="Selection__course">
                            <div className="Selection__course--content">
                                <span className="Selection__course--header">
                                    <OndemandVideoIcon className='Selection__course--icon'/>
                                    Video
                                </span>
                                <span className="Selection__course--description">Những video minh họa chủ đề</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectionLearn;
