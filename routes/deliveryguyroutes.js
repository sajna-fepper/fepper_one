const express = require('express')
const router = express.Router()

const { createPost, updatePost, deletePost, getPost, getuser } = require('../controller/deliveryguycontroller')


router.route('/deliveryguydetails/create').post(createPost)

router.route('/deliveryguydetails/update').post(updatePost)

router.route('/deliveryguydetails/delete').post(deletePost)

router.route('/deliveryguydetails/get').get(getPost)


router.route('/deliveryguydetails/getuser').get(getuser)



module.exports = router