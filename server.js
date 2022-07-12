const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const { PORT, MONGODB_URL } = process.env;



app.get('/', (req, res) => {
    res.send('hello, world');
});

app.listen(PORT, () => console.log(`here is your port ${port}`));

mongoose.connect(
    MONGODB_URL,
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
)
.then(()=>console.log("mongodb conected"))
.catch((err)=> {
    console.log(err)
})