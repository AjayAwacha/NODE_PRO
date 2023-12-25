const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({message: 'Got Get Successfully', app: 'express'});
})
app.post('/', (req, res) => {
    res.send('Got Post reques t Successfully');
})

const port = process.env.PORT || 9876;
app.listen(port, () => {
    console.log(`server listning on port ${port}`);
});
