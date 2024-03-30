import Users from '../schemas/users.js'

const checkAuth = async (req, res, next) => {
    console.log(req.headers.authorization);
    try {
        const decode = req.headers.authorization
            ?   jwt.verify(req.headers.authorization.split(" ")[1], jwtKey)
            :   false;
        console.log("decode: ", decode);
        if (decode) {
            const user = await Users.findById(decode.id).select('name surname');
            req.user = user;
            next()
            return;
        }
        res.status(401).json({
            status: 0,
            message: "Please login!"
        })
    } catch (error) {
        console.log("error: ", error.message);
        res.status(401).json({
            status: 0,
            message: error.message
        })
    }
}

export {
    checkAuth
}