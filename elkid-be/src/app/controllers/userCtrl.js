const Users = require("../models/userModel");
const bcrypt = require("bcrypt");

const userCtrl = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Users.findOne({ username });

      if (!user) {
        return res.json({ msg: "Email không tồn tại", login: false });
      }
      // const isMatch = (password === user.password);
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.json({ msg: "Mật khẩu không chính xác", login: false });
      }

      res.json({
        msg: "Đăng nhập thành công",
        login: true,
        id: user._id,
        username: user.name,
        score: user.score,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  register: async (req, res) => {
    try {
      const { name, username } = req.body;

      console.log(name + " " + username);

      // check email is already exist
      const user = await Users.findOne({ username });
      if (user) {
        return res.json({ msg: "Email đã được đăng kí", register: false });
      }

      // Password Encryption
      const passwordHash = await bcrypt.hash(req.body.password, 10);
      const newUser = new Users({
        name,
        username,
        password: passwordHash,
      });

      // Save mongodb
      const saveUser = await newUser.save();

      res.json({ msg: "Đăng ký thành công", register: true });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await Users.find();
      if (!users) {
        res.json({ msg: "Không tồn tại" });
      }
      res.json(users);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateScore: async (req, res) => {
    try {
      const user = await Users.findOne({ _id: req.params.id });
      console.log(req.body);
      if (!user) {
        res.json({ msg: "user not found" });
      }
      await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
