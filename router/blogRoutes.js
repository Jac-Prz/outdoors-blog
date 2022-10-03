const express = require('express');
const blogController = require('../controllers/blogController')
const blogRouter = express.Router();

blogRouter.route('/') 
.get(blogController.getAllBlogs)           // get all 
.post(blogController.postBlog);     // create one

blogRouter.route('/:id')
.get(blogController.getBlog)      //get one
.patch(blogController.updateBlog)     // update one
.delete(blogController.deleteBlog);   // delete one

module.exports = blogRouter;