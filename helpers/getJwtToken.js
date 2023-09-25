const jwt = require('jsonwebtoken')

const getJwtToken = (userloginId) => {
    return jwt.sign({userloginId: userloginId}, process.env.JWT_SECRET, {expiresIn: '1day'})
}

module.exports = getJwtToken;