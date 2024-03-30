import Channel from '../schemas/channels.js'

const createChannel = async (data) => {
    try {
        const result = await Channel.create(data);
        return {
            status: 1,
            result
        }
    } catch (error) {
        console.log(error);
        return {
            status: 0,
        }
    }
}

const getAllChannels = async (data) => {
    try {
        console.log('getAllChannels: ', data);
        const filter = {}
        if (data.title) {
            filter.title = {
                $regex: data.title,
                $options: 'i'
            }
        }

        const count = await Channel.countDocuments(filter);
        const result = await Channel.find(filter, {}, {
            limit: +data.limit,
            sort: {
                createdAt: data.sort === "desc" ? -1 : 1
            },
            skip: data.page > 0 ? (data.page - 1) * data.limit : 0
        });
        return {
            status: 1,
            result,
            count
        }
    } catch (error) {
        console.log(error);
        return {
            status: 0,
        }
    }
}

const updateChannelById = async (id, data) => {
    try {
        const result = await Channel.findByIdAndUpdate(id, {
            $set: data
        }, {new: true});
        return {
            status: 1,
            result
        }
    } catch (error) {
        console.log(error);
        return {
            status: 0,
        }
    }
}

const deleteChannelById = async (id) => {
    try {
        const result = await Channel.findByIdAndDelete(id);
        return {
            status: 1,
            result
        }
    } catch (error) {
        console.log(error);
        return {
            status: 0,
        }
    }
}


export { createChannel, getAllChannels, updateChannelById, deleteChannelById }