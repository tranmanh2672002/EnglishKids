import AppMain from '~/pages/App';
import Exam from '~/pages/Exam';
import Home from '~/pages/Home';
import LearnTheme from '~/pages/Learn';
import Login from '~/pages/Login';
import Rank from '~/pages/Rank';
import Register from '~/pages/Register';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/app',
        component: AppMain,
    },
    
];

const privateRoutes = [
    {
        path: '/app/learn',
        component: LearnTheme,
    },
    {
        path: '/app/exam',
        component: Exam,
    },
    {
        path: '/app/rank',
        component: Rank,
    },
];

export { publicRoutes, privateRoutes };
