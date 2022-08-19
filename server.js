require('dotenv').config();
const express = require('express');

const path = require('path')
const dbConnect = require('./database/dbConnect');
const blogRouter = require('./router/blogRoutes');
const user = require('./router/user')
const app = express();

app.use(express.json());
app.use('/blogs', blogRouter);
app.use('/login', user);


dbConnect.mongoDbConnect();

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
} )
}

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
});