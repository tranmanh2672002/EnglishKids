import { Link } from 'react-router-dom';
import MenuApp from '~/components/MenuApp';

function AppMain() {
    const access = localStorage.getItem('login') === 'true';
    return (
        <>
            {access ? (
                <MenuApp />
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
