import { create } from '../services/userPackage.js'

const createUserPachage = async (req, res) => {
    const data = await create(req.body);
    res.json({
        status: data.status,
        data: data?.result || null
    })
}

export {
    createUserPachage
}