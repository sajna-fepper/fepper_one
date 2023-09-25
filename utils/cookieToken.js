const getJwtToken = require('../helpers/getJwtToken')



const cookieToken = (userlogin, res) => {
    const token = getJwtToken(userlogin.id);
    const options = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    userlogin.password = undefined;
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        userlogin
    })
}

module.exports = cookieToken;