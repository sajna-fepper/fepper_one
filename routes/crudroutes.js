const express = require('express')
const router = express.Router()

const { createPost, updatePost, deletePost, getPost, getaPost, filter, getuser, createuserdel } = require('../controller/crud')


router.route('/user/create').post(createPost)

router.route('/user/update').post(updatePost)

router.route('/user/delete').post(deletePost)

router.route('/user/get').get(getPost)

router.route('/user/get').post(getaPost)

router.route('/user/filter').post(filter)

router.route('/user/getuser').get(getuser)

router.route('/user/createud').post(createuserdel)


module.exports = router