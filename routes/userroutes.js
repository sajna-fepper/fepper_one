const express = require('express')
const router = express.Router()

const { createPost, updatePost, deletePost, getPost, 
    getaPost, filter, getuser, 
    createuserdel , updatedeluser , deletedeluser,
    connectdeluser, signup, login, logout} = require('../controller/usercontroller')


router.route('/user/create').post(createPost)

router.route('/user/update').post(updatePost)

router.route('/user/delete').post(deletePost)

router.route('/user/get').get(getPost)

router.route('/user/get').post(getaPost)

router.route('/user/filter').post(filter)

router.route('/user/getuser').get(getuser)

router.route('/user/createud').post(createuserdel)

router.route('/user/updateud').post(updatedeluser)

router.route('/user/deleteud').post(deletedeluser)

router.route('/user/connectud').post(connectdeluser)

router.route('/user/signup').post(signup)
router.route('/user/login').post(login)
router.route('/user/logout').get(logout)



module.exports = router