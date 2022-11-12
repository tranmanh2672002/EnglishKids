const mongoose = require('mongoose');

const courseSchema  = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        }, 
        thumbnail: {
            type: String,
            required: true,
        },
        video: {
            type: String,
        },
        images: {
            type: Array,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('courses', courseSchema);