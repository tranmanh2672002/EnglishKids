import AppMain from '~/pages/App';
import Easy from '~/pages/Easy';
import Exam from '~/pages/Exam';
import Home from '~/pages/Home';
import LearnTheme from '~/pages/Learn';
import LearnImages from '~/pages/LearnImages';
import LearnVideo from '~/pages/LearnVideo';
import Login from '~/pages/Login';
import Medium from '~/pages/Meduim';
import Rank from '~/pages/Rank';
import Register from '~/pages/Register';
import ScorePage from '~/pages/ScorePage';
import Selection from '~/pages/Selection';

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
        path: '/app/selection/learnImages/:id',
        component: LearnImages,
    },
    {
        path: '/app/selection/learnVideos/:id',
        component: LearnVideo,
    },
    {
        path: '/app/selection/:id',
        component: Selection,
    },
    {
        path: '/app/exam',
        component: Exam,
    },
    {
        path: '/app/exam/easy',
        component: Easy,
    },
    {
        path: '/app/exam/score',
        component: ScorePage,
    },
    {
        path: '/app/exam/medium',
        component: Medium,
    },
    {
        path: '/app/rank',
        component: Rank,
    },
];

export { publicRoutes, privateRoutes };
