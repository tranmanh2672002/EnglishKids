const userCtrl = {
  login: async (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, "-", password);
    res.send("Login successful");
  },

  register: async (req, res, next) => {
    const { name, username, password, passwordX2 } = req.body;
    console.log(name, "-", username, "-", password, "-", passwordX2);
    res.send("Register successful");
  },
};

module.exports = userCtrl;
