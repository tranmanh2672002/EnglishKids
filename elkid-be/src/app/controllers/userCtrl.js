const userCtrl = {
    login: async (req, res, next) => {
        const {username, password } = req.body;
        console.log(username, '-', password);
        res.send(username + ' ' + password);
    },

    register: async (req, res, next) => {
        const {username, password } = req.body;
        console.log(username, '-', password);
        res.send(username + ' ' + password);
    }
}

module.exports = userCtrl;