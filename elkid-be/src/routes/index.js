const userRouter = require('./userRouter');

function route(app) {
    app.use('/user', userRouter);
}

module.exports = route;