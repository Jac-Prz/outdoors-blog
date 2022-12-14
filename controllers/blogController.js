const blogModel = require('../database/blogModel');

exports.getAllBlogs = async (req, res) => {
    try {
        posts = await blogModel.find({}).sort({date: -1});
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

exports.getBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await blogModel.find({ _id: id });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

exports.postBlog = async (req, res) => {
    try {
        const content = req.body
        console.log(content)
        const post = await blogModel.create(content)
        res.status(200).json(post);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const post = await blogModel.findByIdAndUpdate(id, update);
        res.status(202).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await blogModel.findByIdAndDelete(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};