import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import './Easy.scss';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import axios from 'axios';

function EasyLevel() {
    const [answer, setAnswer] = useState();
    const [answerCorrect, setAnswerCorrect] = useState();
    const [questionCurr, setQuestionCurr] = useState();
    const [questionArr, setQuestionArr] = useState([]);
    const [curr, setCurr] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [check, setCheck] = useState(false);


    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/exam/question-easy');
                setQuestionArr(res.data);
                setQuestionCurr(res.data[curr]);
                setAnswerCorrect(res.data[curr].question_correct);
            } catch (e) {
                console.log('fe: ' + e.message);
            }
        };
        getData();
    }, []);
    console.log(questionArr.length);

    const handleClickCheck = () => {
        if (answer === answerCorrect) {
            // console.log('correct');
            setCorrect(true);
            setCheck(false);
        } else {
            setCheck(false);
            setWrong(true);
        } 
    };

    const handleClickNext = () => {
        // setQuestionCurr(questionArr[1]);
    }

    return (
        <div className="EasyLevel__wrapper">
            <div className="EasyLevel__container">
                <div className="EasyLevel__nav">
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
                {questionCurr ? (
                    <div className="EasyLevel__content">
                        <div className="EasyLevel__question">
                            <IconButton
                                className="EasyLevel__question--icon"
                                aria-label="volume"
                                color="secondary"
                                size="large"
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
