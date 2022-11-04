const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', (req, res) => {
    const {username, password }=req.body;
    console.log(username, '-', password);
    res.send('failed')
})

app.listen(3001, () => {
    console.log('Server start');
})