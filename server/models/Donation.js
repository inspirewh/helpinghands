const { Schema, model } = require('mongoose');
const User = require('./User');


const donationSchema = new Schema({
    item_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 280,
        trim: true,
    },
    item_description: {
        type: String,
        required: true,
        trim: true,
    },
    item_recieved: {
        type: Boolean,
        default: Date.now,
    },
    item_imageUrl: {
        type: String,
        required: true,
    },
    item_quantity: {
        type: Number,
        required: false,
    },
    item_status: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});

const donation = model('donation', donationSchema);

module.exports = donation;
