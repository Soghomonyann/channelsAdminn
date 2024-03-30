import Channel from '../schemas/channels.js'



const checkOwnerChannel = async (req, res, next) => {
    const channel = await Channel.findOne({
        _id: req.params.id,
        user: req.user.id
    })
    if (channel) {
        next()
        return
    }
    res.json({
        status: 0,
        message: "You don;t have permision for this channel!"
    })
}

export {
    checkOwnerChannel
}