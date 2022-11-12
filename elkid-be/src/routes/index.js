const userRouter = require('./userRouter');
const courseRouter = require('./courseRouter');

function route(app) {
    app.use('/user', userRouter);
    app.use('/course', courseRouter);
}

module.exports = route;