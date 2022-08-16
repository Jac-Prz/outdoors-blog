const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    date: String,
    type: String,
    body: String,
    img: [{
        url: String,
        public_id: String
    }]
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Blog', blogSchema);

