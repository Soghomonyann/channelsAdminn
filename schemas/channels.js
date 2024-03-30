import mongoose from "mongoose";

const Channels = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    packages: {
        daily: {
            type: Number,
            required: true
        },
        weekly: Number,
        mounthly: Number
    },
    currency: {
        type: String,
        default: "USD"
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const ChannelModel = mongoose.model('channels', Channels);

export default ChannelModel;