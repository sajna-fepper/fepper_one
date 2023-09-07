const prisma = require('../prisma/index')

//create a new post on fepper

exports.createPost = async(req, res, next) => {
    try {
    const {name, email,
        password,
        remember_token,
        auth_token,
        phone,
        default_address_id,
        delivery_pin,
        delivery_guy_detail_id,
        avatar,
        is_active,
        tax_number,
        user_ip}  = req.body
    //validation on you
    const result = await prisma.user.create({
        data: {
            name,
            email,
            password,
            remember_token,
            auth_token,
            phone,
            default_address_id,
            delivery_pin,
            delivery_guy_detail_id,
            avatar,
            is_active,
            tax_number,
            user_ip
        }
    })
    res.json(result)
    } catch (error) {
        throw new Error(error)   
    }
}

// get all post on fepper

exports.getPost = async(req, res, next) => {
    try {
    const result = await prisma.user.findMany()
    res.json(result)
    } catch (error) {
        res.json ({error: `post with ${id} does not exist`})   
    }
}

//updating post on fepper

exports.updatePost = async(req, res, next) => {
    const {id} = req.body;
    const {name,
        email,
        password,
        remember_token,
        auth_token,
        phone,
        default_address_id,
        delivery_pin,
        delivery_guy_detail_id,
        avatar,
        is_active,
        tax_number,
        user_ip} = req.body
    try {
    const {name,
        email,
        password,
        remember_token,
        auth_token,
        phone,
        default_address_id,
        delivery_pin,
        delivery_guy_detail_id,
        avatar,
        is_active,
        tax_number,
        user_ip}  = req.body
    
    const result = await prisma.user.update({
        where: {id: id},
        data: {
            name: name,
            email: email,
            password: password,
            remember_token: remember_token,
            auth_token: auth_token,
            phone: phone,
            default_address_id: default_address_id,
            delivery_pin: delivery_pin,
            delivery_guy_detail_id: delivery_guy_detail_id,
            avatar: avatar,
            is_active: is_active,
            tax_number: tax_number,
            user_ip: user_ip
        }    
    });
    res.json(result)
    
    } catch (error) {
        res.json ({error: `post with ${id} does not exist`})   
    }
}

//delete a post from fepper
exports.deletePost = async(req, res, next) => {
    const {id} = req.body;
    const {name,
        email,
        password,
        remember_token,
        auth_token,
        phone,
        default_address_id,
        deleivery_pin,
        delivery_guy_detail_id,
        avatar,
        is_active,
        tax_number,
        user_ip} = req.body
    try {
    const {name,
        email,
        password,
        remember_token,
        auth_token,
        phone,
        default_address_id,
        deleivery_pin,
        delivery_guy_detail_id,
        avatar,
        is_active,
        tax_number,
        user_ip}  = req.body
    
    const result = await prisma.user.delete({
        where: {id: id}
    });
    res.json({status: true , message:`post with ${id} deleted successsfully`})
    
    } catch (error) {
        res.json ({error: `post with ${id} not exist`})   
    }
}



