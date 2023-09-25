const express = require('express')
const router = express.Router()

const { createOrder, getOrder, updateOrder, deleteOrder ,
     getresorder, createresorder, updatereo ,
     getuserorder, createuserorder, updateuserorder, createuseresorder} = require('../controller/ordercontroller')


router.route('/order/createorder').post(createOrder)

router.route('/order/getorder').get(getOrder)

router.route('/order/updateorder').post(updateOrder)

router.route('/order/deleteorder').post(deleteOrder)

router.route('/order/readresorder').get(getresorder)

router.route('/order/updatereo').post(updatereo)

router.route('/order/readuserorder').get(getuserorder)

router.route('/order/updateuo').post(updateuserorder)

router.route('/order/createuor').post(createuseresorder)

module.exports = router