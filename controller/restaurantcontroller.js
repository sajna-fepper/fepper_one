const prisma = require('../prisma/index')

//create

exports.createRest = async(req, res, next) => {
    try {
    const {name,
        description,
        location_id, 
        image, 
        rating,
        delivery_time, 
        price_range,   
        is_pureveg ,  
        slug,   
        latitude,   
        longitude,   
        certificate,
        restaurant_charges,  
        delivery_charges,   
        address,  
        pincode,
        landmark,
        sku,
        is_active,
        is_accepted,
        is_featured,
        commision_rate,
        delivery_type,
        delivery_radius,
        delivery_charge_type,
        base_delivery_charge,
        base_delivery_distance,
        extra_delivery_charge,
        extra_delivery_distance,
        min_order_price,
        is_notifiable,
        auto_acceptable,
        schedule_data,
        is_schedulable,
        order_column,
        custom_message,
        is_orderscheduling,
        branch_id}  = req.body
    //validation on you
    const result = await prisma.restaurants.create({
        data: {
        name,
        description,
        location_id, 
        image, 
        rating,
        delivery_time, 
        price_range,   
        is_pureveg ,  
        slug,   
        latitude,   
        longitude,   
        certificate,
        restaurant_charges,  
        delivery_charges,   
        address,  
        pincode,
        landmark,
        sku,
        is_active,
        is_accepted,
        is_featured,
        commision_rate,
        delivery_type,
        delivery_radius,
        delivery_charge_type,
        base_delivery_charge,
        base_delivery_distance,
        extra_delivery_charge,
        extra_delivery_distance,
        min_order_price,
        is_notifiable,
        auto_acceptable,
        schedule_data,
        is_schedulable,
        order_column,
        custom_message,
        is_orderscheduling,
        branch_id
        }
    })
    res.json(result)
    } catch (error) {
        throw new Error(error)  
    }
}

//read
exports.getRest = async(req, res, next) => {
    try {
     const result = await prisma.restaurants.findMany()
     res.json(result)
    
    } catch (error) {
        res.json ({error: `post with ${id} does not exist`})   
    }
}

//update

exports.updateRest = async(req, res, next) => {
    const {id} = req.body;
    try {
    const {name,
        description,
        location_id, 
        image, 
        rating,
        delivery_time, 
        price_range,   
        is_pureveg ,  
        slug,   
        latitude,   
        longitude,   
        certificate,
        restaurant_charges,  
        delivery_charges,   
        address,  
        pincode,
        landmark,
        sku,
        is_active,
        is_accepted,
        is_featured,
        commision_rate,
        delivery_type,
        delivery_radius,
        delivery_charge_type,
        base_delivery_charge,
        base_delivery_distance,
        extra_delivery_charge,
        extra_delivery_distance,
        min_order_price,
        is_notifiable,
        auto_acceptable,
        schedule_data,
        is_schedulable,
        order_column,
        custom_message,
        is_orderscheduling,
        branch_id
        }  = req.body
    
    const result = await prisma.restaurants.update({
        where: {id: id},
        data: {
            name : name,
            description : description,
            location_id : location_id, 
            image : image, 
            rating : rating,
            delivery_time : delivery_time, 
            price_range : price_range,   
            is_pureveg : is_pureveg,  
            slug : slug,   
            latitude : latitude,   
            longitude : longitude,   
            certificate : certificate,
            restaurant_charges : restaurant_charges,  
            delivery_charges : delivery_charges,   
            address : address,  
            pincode : pincode,
            landmark: landmark,
            sku : sku,
            is_active : is_active,
            is_accepted : is_accepted,
            is_featured : is_featured,
            commision_rate : commision_rate,
            delivery_type : delivery_type,
            delivery_radius : delivery_radius,
            delivery_charge_type : delivery_charge_type,
            base_delivery_charge : base_delivery_charge,
            base_delivery_distance : base_delivery_distance,
            extra_delivery_charge : extra_delivery_charge,
            extra_delivery_distance : extra_delivery_distance,
            min_order_price : min_order_price,
            is_notifiable : is_notifiable,
            auto_acceptable : auto_acceptable,
            schedule_data : schedule_data,
            is_schedulable : is_schedulable,
            order_column : order_column,
            custom_message : custom_message,
            is_orderscheduling : is_orderscheduling,
            branch_id : base_delivery_charge
        }    
    });
    res.json(result)
    
    } catch (error) {
        res.json ({error: `post with ${id} does not exist`})   
    }
}

//delete
exports.deleteRest = async(req, res, next) => {
    const {id} = req.body;
    try {
    const {name,
        description,
        location_id, 
        image, 
        rating,
        delivery_time, 
        price_range,   
        is_pureveg ,  
        slug,   
        latitude,   
        longitude,   
        certificate,
        restaurant_charges,  
        delivery_charges,   
        address,  
        pincode,
        landmark,
        sku,
        is_active,
        is_accepted,
        is_featured,
        commision_rate,
        delivery_type,
        delivery_radius,
        delivery_charge_type,
        base_delivery_charge,
        base_delivery_distance,
        extra_delivery_charge,
        extra_delivery_distance,
        min_order_price,
        is_notifiable,
        auto_acceptable,
        schedule_data,
        is_schedulable,
        order_column,
        custom_message,
        is_orderscheduling,
        branch_id}  = req.body
    
    const result = await prisma.restaurants.delete({
        where: {id: id}
    });
    res.json({status: true , message:`post with ${id} deleted successsfully`})
    
    } catch (error) {
        res.json ({error: `post with ${id} not exist`})   
    }
}

//get restaurant with userid
exports.getresuser = async(req, res, next) => {
    try {
const result = await prisma.restaurants.findMany({
    where: {
      id: 1
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