const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');
const route = require('./routes');
// const userRouter =require('./routes/userRouter')


app.use(cors());
app.use(express.json());

const PORT = 3001;

try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
} catch (err) {
    console.log(err);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

route(app)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})