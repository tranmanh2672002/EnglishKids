import './Score.scss';

function Score() {
    return ( 
        <>
        <h2>{localStorage.getItem('score')}</h2>
        </>
     );
}

export default Score;