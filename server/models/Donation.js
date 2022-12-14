const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
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
    item_received: {
        type: Boolean,
        required: false,
    },
    item_imageUrl: {
        type: String,
        required: true,
    },
    item_quantity: {
        type: Number,
        required: false,
    },
    item_status_sent: {
        type: String,
        required: false,
        default: Date.now,
    }
},{
    timestamps: true,
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
