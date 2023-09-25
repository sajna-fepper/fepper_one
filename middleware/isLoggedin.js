const prisma = require('../prisma/index')

const jwt = require('jsonwebtoken')

const isLoggedin = async(req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            res.send('please login')
            throw new Error('you are not logged in')
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userlogin = await prisma.userlogin.findUnique({
            where: {
                id: decoded.userloginId
            }
        })
        next()
    } catch (error) {
        throw new Error(error)
    }
}

module .exports = isLoggedin