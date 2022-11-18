const userRouter = require('./userRouter');
const courseRouter = require('./courseRouter');
const examRouter = require('./examRouter');

function route(app) {
    app.use('/user', userRouter);
    app.use('/course', courseRouter);
    app.use('/exam', examRouter);
}

module.exports = route;