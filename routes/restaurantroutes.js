const express = require('express')
const router = express.Router()

const { createRest, getRest, updateRest, deleteRest , getresuser} = require('../controller/restaurantcontroller')


router.route('/restaurant/createres').post(createRest)

router.route('/restaurant/readres').get(getRest)

router.route('/restaurant/updateres').post(updateRest)

router.route('/restaurant/deleteres').post(deleteRest)


module.exports = router