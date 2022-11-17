import './Easy.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

function EasyLevel() {
    const [answer, setAnswer] = useState();
    const [answerCorrect, setAnswerCorrect] = useState();
    const [questionCurr, setQuestionCurr] = useState();
    const [questionArr, setQuestionArr] = useState([]);
    const [voiceCurr, setVoiceCurr] = useState('');
    const [curr, setCurr] = useState(1);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [check, setCheck] = useState(false);
    const [score, setScore] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClickAgree = () => {
        navigate('/app/exam');
    }

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/exam/question-easy');
                setQuestionArr(res.data);
                setQuestionCurr(res.data[0]);
                setAnswerCorrect(res.data[0].question_correct);
                setVoiceCurr(res.data[0].voice);
            } catch (e) {
                console.log('fe: ' + e.message);
            }
        };
        getData();
    }, []);

    const handleClickCheck = () => {
        if (answer === answerCorrect) {
            setCorrect(true);
            setScore(score + 10);
            setCheck(false);
        } else {
            setCheck(false);
            setWrong(true);
        }
    };

    const handleClickNext = () => {
        console.log(curr);
        setCurr(curr + 1);
        console.log(curr);
        if (curr < questionArr.length) {
            setQuestionCurr(questionArr[curr]);
            setVoiceCurr(questionArr[curr].voice);
            setAnswerCorrect(questionArr[curr].question_correct);
            setCorrect(false);
            setWrong(false);
            setCheck(false);
            setAnswer();
        } else {
            localStorage.setItem('score', score);
            navigate('/app/exam/score');
        }
    };

    const handleClickVolume = (e) => {
        new Audio(voiceCurr).play();
    };

    return (
        <div className="EasyLevel__wrapper">
            <div className="EasyLevel__container">
                <div className="EasyLevel__nav">
                    {/* /app/exam */}
                    <Link to="" onClick={handleOpen}>
                        <IconButton aria-label="delete" size="large" color="secondary">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    {/* <Link to="/app">
                        <IconButton aria-label="delete" size="large" color="secondary">
                            <HomeIcon />
                        </IconButton>
                    </Link> */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={styleModal}>
                            <Typography
                                id="keep-mounted-modal-title"
                                color={'var(--primary-color)'}
                                variant="h6"
                                component="h2"
                            >
                                Bạn thực sự muốn thoát ?
                            </Typography>
                            <Typography
                                id="keep-mounted-modal-description"
                                color={'#666'}
                                sx={{ mt: 2 }}
                            >
                                Nếu thoát bài thi, kết quả sẽ không được công nhận
                            </Typography>
                            <Stack direction="row" spacing={2} justifyContent="right" pt={2}>
                                <Button className="btn--cancel" variant="contained" onClick={handleClose}>
                                    Hủy
                                </Button>
                                <Button color="secondary" variant="contained" onClick={handleClickAgree}>
                                    Đồng ý
                                </Button>
                            </Stack>
                        </Box>
                    </Modal>
                </div>
                {questionCurr ? (
                    <div className="EasyLevel__content">
                        <div className="EasyLevel__question">
                            <IconButton
                                className="EasyLevel__question--icon"
                                aria-label="volume"
                                color="secondary"
                                size="large"
                                data-sound={questionCurr.voice}
                                onClick={handleClickVolume}
                            >
                                <VolumeUpIcon />
                            </IconButton>
                        </div>
                        <div className="EasyLevel__answer">
                            {questionCurr.questions.map((question) => {
                                return (
                                    <div
                                        key={question.id}
                                        className={'EasyLevel__answer--wrapper'}
                                        onClick={() => {
                                            setAnswer(question.id);
                                            if (!correct && !wrong) {
                                                setCheck(true);
                                            }
                                        }}
                                    >
                                        <div
                                            className={
                                                answer === question.id
                                                    ? 'EasyLevel__answer--item EasyLevel__answer--item-active'
                                                    : 'EasyLevel__answer--item'
                                            }
                                        >
                                            <input type="image" src={question.image} alt="image" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="EasyLevel__bottom">
                            {correct && (
                                <div className="EasyLevel__bottom--correct">
                                    <div className="EasyLevel__bottom--left">
                                        <IconButton
                                            className="EasyLevel__bottom--left-icon"
                                            size="large"
                                            color="success"
                                        >
                                            <CheckIcon />
                                        </IconButton>
                                        <div className="EasyLevel__bottom--title">Đáp án chính xác</div>
                                    </div>
                                    <Button
                                        className="EasyLevel__bottom--btn"
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleClickNext}
                                    >
                                        Tiếp tục
                                    </Button>
                                </div>
                            )}
                            {wrong && (
                                <div className="EasyLevel__bottom--wrong">
                                    <div className="EasyLevel__bottom--left">
                                        <IconButton className="EasyLevel__bottom--left-icon" size="large" color="error">
                                            <CloseIcon />
                                        </IconButton>
                                        <div className="EasyLevel__bottom--title">Đáp án sai</div>
                                    </div>
                                    <Button
                                        className="EasyLevel__bottom--btn"
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleClickNext}
                                    >
                                        Tiếp tục
                                    </Button>
                                </div>
                            )}
                            {check && (
                                <div className="EasyLevel__bottom--check">
                                    <Button
                                        className="EasyLevel__bottom--btn"
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleClickCheck}
                                    >
                                        Kiểm tra
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <h2>No question</h2>
                )}
            </div>
        </div>
    );
}

export default EasyLevel;
