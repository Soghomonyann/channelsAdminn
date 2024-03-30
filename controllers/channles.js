import { createChannel, getAllChannels, updateChannelById, deleteChannelById } from '../services/channel.js'

const getAll = async (req, res) => {
    const filter = req.query;
    console.log(filter);
    const data = await getAllChannels(filter);
    res.json({
        status: 1,
        data
    })
}

const create = async (req, res) => {
    const data = await createChannel(req.body)
    res.json({
        status: data.status,
        data: data?.result || null
    })
}

const update = async (req, res) => {
    const data = await updateChannelById(req.params.id, req.body)
    res.json({
        status: data.status,
        data: data?.result || null
    })
}

const deleteChannel = async (req, res) => {
    const data = await deleteChannelById(req.params.id)
    res.json({
        status: data.status,
        data: data?.result || null
    })
}

export {
    getAll,
    create,
    update,
    deleteChannel
}