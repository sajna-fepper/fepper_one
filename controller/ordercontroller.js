const prisma = require('../prisma/index')

//create

exports.createOrder = async(req, res, next) => {
    try {
    const {unique_order_id,  
        orderstatus_id, 
        user_id,
        coupon_name, 
        location,  
        address,
        tax, 
        restaurant_charge,
        delivery_charge,
        total,
        payment_mode,
        order_comment,
        restaurant_id,
        transaction_id, 
        delivery_type,
        payable,
        wallet_amount, 
        tip_amount, 
        tax_amount,
        coupon_amount,
        coupon_isrestaurant,
        sub_total,
        cash_change_amount,
        restaurant_tax, 
        online_payment_status, 
        rain_charge, 
        extra_charge, 
        extra_title 
        }  = req.body
    //validation on you
    const result = await prisma.orders.create({
        data: {
            unique_order_id,  
            orderstatus_id, 
            user_id,
            coupon_name, 
            location,  
            address,
            tax, 
            restaurant_charge,
            delivery_charge,
            total,
            payment_mode,
            order_comment,
            restaurant_id,
            transaction_id, 
            delivery_type,
            payable,
            wallet_amount, 
            tip_amount, 
            tax_amount,
            coupon_amount,
            coupon_isrestaurant,
            sub_total,
            cash_change_amount,
            restaurant_tax, 
            online_payment_status, 
            rain_charge, 
            extra_charge, 
            extra_title
        }
    })
    res.json(result)
    } catch (error) {
        throw new Error(error)  
    }
}

//read
exports.getOrder = async(req, res, next) => {
    try {
     const result = await prisma.orders.findMany()
     res.json(result)
    
    } catch (error) {
        res.json ({error: `post with ${id} does not exist`})   
    }
}

//update

exports.updateOrder = async(req, res, next) => {
    const {id} = req.body;
    try {
    const {unique_order_id,  
        orderstatus_id, 
        user_id,
        coupon_name, 
        location,  
        address,
        tax, 
        restaurant_charge,
        delivery_charge,
        total,
        payment_mode,
        order_comment,
        restaurant_id,
        transaction_id, 
        delivery_type,
        payable,
        wallet_amount, 
        tip_amount, 
        tax_amount,
        coupon_amount,
        coupon_isrestaurant,
        sub_total,
        cash_change_amount,
        restaurant_tax, 
        online_payment_status, 
        rain_charge, 
        extra_charge, 
        extra_title
        }  = req.body
    
    const result = await prisma.orders.update({
        where: {id: id},
        data: {
            unique_order_id: unique_order_id,  
            orderstatus_id: orderstatus_id, 
            user_id: user_id,
            coupon_name: coupon_name, 
            location: location,  
            address: address,
            tax: tax, 
            restaurant_charge:restaurant_charge,
            delivery_charge: delivery_charge,
            total: total,
            payment_mode: payment_mode,
            order_comment:order_comment,
            restaurant_id: restaurant_id,
            transaction_id: transaction_id, 
            delivery_type: delivery_type,
            payable: payable,
            wallet_amount: wallet_amount, 
            tip_amount: tip_amount, 
            tax_amount: tax_amount,
            coupon_amount: coupon_amount,
            coupon_isrestaurant: coupon_isrestaurant,
            sub_total: sub_total,
            cash_change_amount: cash_change_amount,
            restaurant_tax: restaurant_tax, 
            online_payment_status: online_payment_status, 
            rain_charge: rain_charge, 
            extra_charge: extra_charge, 
            extra_title: extra_title
        }    
    });
    res.json(result)
    
    } catch (error) {
        res.json ({error: `post with ${id} does not exist`})   
    }
}

//delete
exports.deleteOrder = async(req, res, next) => {
    const {id} = req.body;
    try {
    const {unique_order_id,  
        orderstatus_id, 
        user_id,
        coupon_name, 
        location,  
        address,
        tax, 
        restaurant_charge,
        delivery_charge,
        total,
        payment_mode,
        order_comment,
        restaurant_id,
        transaction_id, 
        delivery_type,
        payable,
        wallet_amount, 
        tip_amount, 
        tax_amount,
        coupon_amount,
        coupon_isrestaurant,
        sub_total,
        cash_change_amount,
        restaurant_tax, 
        online_payment_status, 
        rain_charge, 
        extra_charge, 
        extra_title}  = req.body
    
    const result = await prisma.orders.delete({
        where: {id: id}
    });
    res.json({status: true , message:`post with ${id} deleted successsfully`})
    
    } catch (error) {
        res.json ({error: `post with ${id} not exist`})   
    }
}

//get restaurant with orderid
exports.getresorder = async(req, res, next) => {
    try {
const result = await prisma.orders.findMany({
    where: {
      id: 5
    },
    include: {
   orderid_two: true, // All posts where authorId == 20
    },
  });
  res.json(result)
    } catch (error) {
        res.json ({error: error})   
    }
}
//update order rest
exports.updatereo = async(req, res, next) => {
try {    
const result = await prisma.orders.update({
    where: {
        restaurant_id: 1,
    },
data: {
  orderid_two: {
    update: {
      where: {
        id: 1,
      },
      data: {
        name: 'HFC',
      },
    },
  },
},
include: {
  orderid_two: true,
},
})  
res.json(result)
} catch (error) {
res.json ({error: error})  
}
}

//get user with orderid
exports.getuserorder = async(req, res, next) => {
    try {
const result = await prisma.orders.findMany({
    where: {
      id: 5
    },
    include: {
   orderid_one: true, // All posts where authorId == 20
    },
  });
  res.json(result)
    } catch (error) {
        res.json ({error: error})   
    }
}
//update order user
exports.updateuserorder = async(req, res, next) => {
    try {    
    const result = await prisma.orders.update({
        where: {
            user_id: 3,
        },
    data: {
      orderid_one: {
        update: {
          where: {
            id: 3,
          },
          data: {
            name: 'shamil',
          },
        },
      },
    },
    include: {
      orderid_one: true,
    },
    })  
    res.json(result)
    } catch (error) {
    res.json ({error: error})  
    }
    }
    

    // order user restaurant
    exports.createuseresorder = async(req, res, next) => {
        try {
            const {unique_order_id,  
                orderstatus_id, 
                user_id,
                coupon_name, 
                location,  
                address,
                tax, 
                restaurant_charge,
                delivery_charge,
                total,
                payment_mode,
                order_comment,
                restaurant_id,
                transaction_id, 
                delivery_type,
                payable,
                wallet_amount, 
                tip_amount, 
                tax_amount,
                coupon_amount,
                coupon_isrestaurant,
                sub_total,
                cash_change_amount,
                restaurant_tax, 
                online_payment_status, 
                rain_charge, 
                extra_charge, 
                extra_title}  = req.body
        //validation on you
        const result = await prisma.orders.create({
            data: {
                unique_order_id: unique_order_id,  
                orderstatus_id: orderstatus_id,
                coupon_name: coupon_name, 
                location: location,  
                address: address,
                tax: tax, 
                restaurant_charge:restaurant_charge,
                delivery_charge: delivery_charge,
                total: total,
                payment_mode: payment_mode,
                order_comment:order_comment,
                transaction_id: transaction_id, 
                delivery_type: delivery_type,
                payable: payable,
                wallet_amount: wallet_amount, 
                tip_amount: tip_amount, 
                tax_amount: tax_amount,
                coupon_amount: coupon_amount,
                coupon_isrestaurant: coupon_isrestaurant,
                sub_total: sub_total,
                cash_change_amount: cash_change_amount,
                restaurant_tax: restaurant_tax, 
                online_payment_status: online_payment_status, 
                rain_charge: rain_charge, 
                extra_charge: extra_charge, 
                extra_title: extra_title,
                orderid_one:{
                    create: {
                        name: "shai",
                        email: "uefge@gmail.com",
                        password: "fdbb",
                        remember_token: "fdvrf",
                        auth_token: "fdbr",
                        phone: "7000",
                        default_address_id: 2,
                        delivery_pin: "bfd",
                        deliveryboy: {
                        create:{ 
                           name: "shazil",
                           age: "19",
                           gender: "male",
                           photo: "thfrr",
                           description: "auth_tokenfgd",
                           vehicle_number: "3580182",
                           commision_rate: 3.5,
                           is_notifiable: 6,
                           max_accept_delivery_limit: 6,
                           delivery_lat: "afnr",
                           delivery_long: "0",
                           heading: "95",
                           tip_commision_rate: 2.2,
                           status:0},
                        },
                        avatar: "dvui",
                        is_active: 1,
                        tax_number: "bdtd",
                        user_ip: "frbbtb",
                       },
                    },
                orderid_two:
                   {
                    create:{   
                        name: "RFC",
                        description :"ENRICHED WITH SPICY N FRAGNANCE",
                        location_id: "230", 
                        image: "njhj", 
                        rating : "5",
                        delivery_time: "5:00", 
                        price_range: "500",   
                        is_pureveg:0 ,  
                        slug : "ddhg",   
                        latitude : "kjk",   
                        longitude: "nbm",   
                        certificate : "hjog",
                        restaurant_charges: 19.5,  
                        delivery_charges: 20.0,   
                        address: "naimarmoola",  
                        pincode: "671123",
                        landmark : "hgfytg",
                        sku: "hjgy",
                        is_active: 1,
                        is_accepted: 1,
                        is_featured: 1,
                        commision_rate: 2.3,
                        delivery_type: 2,
                        delivery_radius: 5.5,
                        delivery_charge_type : "ljlnh",
                        base_delivery_charge : 30.5,
                        base_delivery_distance: 3,
                        extra_delivery_charge: 10.0,
                        extra_delivery_distance: 2,
                        min_order_price: 20.2 ,
                        is_notifiable: 1,
                        auto_acceptable: 1,
                        schedule_data: "gfihkkkkkkk6",
                        is_schedulable: 1,
                        order_column: 5,
                        custom_message :"khguoijg",
                        is_orderscheduling : 1,
                        branch_id: 5,    

                     },
                },
            }, 
            
                   
               });
        res.json(result)
        } catch (error) {
            res.json ({error: error})  
        }
    }
    