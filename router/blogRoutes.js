const express = require('express');
const blogController = require('../controllers/blogController')
const blogRouter = express.Router();


blogRouter.route('/') 
.get(blogController.blog_get)           // get all 
.post(blogController.blog_post);     // create one

blogRouter.route('/:id')
.get(blogController.blog_get_one)      //get one
.patch(blogController.blog_update)     // update one
.delete(blogController.blog_delete);   // delete one

module.exports = blogRouter;