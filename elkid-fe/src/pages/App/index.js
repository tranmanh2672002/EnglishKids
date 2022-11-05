import { Link } from 'react-router-dom';

function AppMain() {
    const access = localStorage.getItem('login') === 'true';
    console.log(access);
    return (
        <>
            {access ? (
                <h2>App</h2>
            ) : (
                <Link to="/login" style={{ color: 'blue' }}>
                    {' '}
                    Go to login
                </Link>
            )}
        </>
    );
}

export default AppMain;
