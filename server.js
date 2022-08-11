require('dotenv').config();
const express = require('express');

const dbConnect = require('./database/dbConnect');
const blogRouter = require('./router/blogRoutes');
const app = express();

app.use(express.json());
app.use('/blogs', blogRouter);


dbConnect.mongoDbConnect();

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
});