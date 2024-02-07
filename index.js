const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser())


const auth = require('./utils/auth').auth
app.use(auth);

app.use(express.static(path.join(__dirname, './public')));


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});