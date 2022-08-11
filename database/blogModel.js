const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema({
    title: String, 
    content: String, 
    imageUrl: String
}, {timestamps:{createdAt: 'created_at'}});

module.exports = mongoose.model('Blog', blogSchema);

