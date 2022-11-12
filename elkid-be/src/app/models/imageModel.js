const mongoose = require('mongoose');

const imageSchema  = new mongoose.Schema (
    {
        name: {
            type: String,
        },
        link: {
            type: String,
        },
        voice: {
            type: String,
        },
        id: mongoose.Schema.ObjectId,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('image', imageSchema);