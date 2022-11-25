
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import user from '~/assets/images/reading.png'
import coin from '~/assets/images/coin.png'


import './index.scss';

function Ranking() {
    return (
        <>
            <div className="Ranking__wrapper">
                <div className="Ranking__container">
                    <div className="Ranking__back-btn">
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
                    <div className="Ranking__header">Xếp hạng </div>
                    <div className="Ranking__main">
                        {/* <div className="Ranking__title-top">
                        <ul className="Ranking__title-item">
                            <li>#</li>
                            <li>Tài khoản</li>
                            <li>Điểm</li>
                        </ul>
                             </div> */}
                        <div className="Rank-top" >
                            <div className="first">
                                <div className="top">2</div>
                                <img src={user} alt="user"></img>
                                <h4 >Anh Minh</h4>
                                <h4>
                                    <img src={coin} alt="coin"></img>
                                    400</h4>
                            </div>
                            <div className="second">
                                <div className="top">1</div>
                                <img src={user} alt="user"></img>
                                <div>
                                    <h4>Anh Minh</h4>
                                    <h4>
                                        <img src={coin} alt="coin"></img>
                                        500</h4>
                                </div>
                            </div>
                            <div className="third">
                                <div className="top">3</div>
                                <img src={user} alt="user"></img>
                                <div>
                                    <h4>Anh Minh</h4>
                                    <h4>
                                        <img src={coin} alt="coin"></img>
                                        300</h4>
                                </div>
                            </div>
                        </div>
                        <div className="Ranking__list">
                            <div className="Ranking__list-main">
                                <div className="Ranking__list-order">
                                    4</div>
                                <div className="Ranking__list-content">
                                    <img src={user} alt="user"></img>
                                    Anh Minh
                                </div>
                                <div className="Ranking__list-point">
                                    <img src={coin} alt="coin"></img>

                                    1000
                                </div>
                            </div>

                            <div className="Ranking__list-main">
                                <div className="Ranking__list-order">
                                    5</div>
                                <div className="Ranking__list-content">
                                    <img src={user} alt="user"></img>
                                    Anh Minh
                                </div>
                                <div className="Ranking__list-point">
                                    <img src={coin} alt="coin"></img>

                                    1000
                                </div>
                            </div>
                            <div className="Ranking__list-main">
                                <div className="Ranking__list-order">
                                    6</div>
                                <div className="Ranking__list-content">
                                    <img src={user} alt="user"></img>
                                    Anh Minh
                                </div>
                                <div className="Ranking__list-point">
                                    <img src={coin} alt="coin"></img>

                                    1000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Ranking;
