import './Level.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function LevelExam() {
    return (
        <>
            <div className="level__wrapper">
                <div className="level__container">
                    <div className="level__nav">
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
                    <div className="level__header">Chọn mức độ</div>
                    <div className="level__content">
                        <Link to="/app/exam/easy" className="level__course">
                            <div className="level__course--content">
                                <span className="level__course--header">Mức độ dễ</span>
                                <span className="level__course--description">Nghe và đoán đáp án</span>
                            </div>
                        </Link>

                        <Link to="/app/exam/medium" className="level__course">
                            <div className="level__course--content">
                                <span className="level__course--header">Mức độ trung bình</span>
                                <span className="level__course--description">Trả lời câu hỏi để chọn đáp án đúng</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LevelExam;
