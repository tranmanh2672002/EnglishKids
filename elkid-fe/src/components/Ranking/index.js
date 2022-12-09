import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import userImage from '~/assets/images/reading.png';
import coin from '~/assets/images/coin.png';

import './index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Ranking() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:3001/user/allUsers');
                setUsers(res.data);
            } catch (err) {
                console.error('fe: ' + err.message);
            }
        };
        getData();
    }, []);

    const compareNumber = (a, b) => {
        const scoreA = a.score;
        const scoreB = b.score;

        let comparison = 0;
        if (scoreA < scoreB) {
            comparison = 1;
        } else if (scoreA > scoreB) {
            comparison = -1;
        }
        return comparison;
    };

    if (users) {
        users.sort(compareNumber);
    }

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
                        <div className="Ranking__list">
                            {users.map((user, index) => {
                                if (index > 4) return;
                                return (
                                    <div key={user._id} className="Ranking__list-main">
                                        <div className="Ranking__list-order">{index + 1}</div>
                                        <div className="Ranking__list-content">
                                            <img src={userImage} alt="user"></img>
                                            {user.name}
                                        </div>
                                        <div className="Ranking__list-point">
                                            {user.score}
                                            <img src={coin} alt="coin"></img>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ranking;
