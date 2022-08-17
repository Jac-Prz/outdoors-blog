require('dotenv').config();
const express = require('express');

const dbConnect = require('./database/dbConnect');
const blogRouter = require('./router/blogRoutes');
const user = require('./router/user')
const app = express();

app.use(express.json());
app.use('/blogs', blogRouter);
app.use('/login', user);


dbConnect.mongoDbConnect();

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
});