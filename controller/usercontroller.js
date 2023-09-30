const prisma = require('../prisma/index')
const cookieToken = require("../utils/cookieToken");

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
//get a post with id
exports.getaPost = async(req, res, next) => {
    const {id} = req.body;

    try {
    
    
    const result = await prisma.user.findUnique({
        where: {id: 10},
        
    });
    res.json(result)
    console.log(result)
    
    } catch (error) {
        res.json ({error: error})   
    }
}
//filtering using is actitive
exports.filter = async(req, res, next) => {
    const {id} = req.body;

    try {
    
    
         const result = await prisma.user.findMany({
        //     where: {
        //       is_active: 0,
        //     },
        where: {
            AND: [
              {
                
                  is_active: 1,
                },
              
              { email: { endsWith: 'gmail.com' } },
            ],
            NOT: {
              email: {
                endsWith: 'hotmail.com',
              },
            },
          },
          select: {
            id: true,
            name: true,
            email: true,
          },
        });
    
    res.json(result)
    console.log(result)
    
    } catch (error) {
        res.json ({error: error})   
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

// get deliveryboyuser
exports.getuser = async(req, res, next) => {
    try {
const result = await prisma.user.findMany({
    where: {
      delivery_guy_detail_id: 1
    },
    include: {
   deliveryboy: true, // All posts where authorId == 20
    },
  });
  res.json(result)
    } catch (error) {
        res.json ({error: error})   
    }
}

// create deliveryboy user
    exports.createuserdel = async(req, res, next) => {
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
        //validation on you
        const result = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                remember_token: remember_token,
                auth_token: auth_token,
                phone: phone,
                default_address_id: default_address_id,
                delivery_pin: delivery_pin,
                avatar: avatar,
                is_active: is_active,
                tax_number: tax_number,
                user_ip: user_ip,
            
            deliveryboy: {
                create: 
                  { name: "shamil",
                  age: "19",
                  gender: "male",
                  photo: "thfrr",
                  description: "auth_tokenfgd",
                  vehicle_number: "358182",
                  commision_rate: 3.5,
                  is_notifiable: 6,
                  max_accept_delivery_limit: 6,
                  delivery_lat: "afnr",
                  delivery_long: "0",
                  heading: "95",
                  tip_commision_rate: 2.2,
                  status:0},
                
              },
            },
            
        })
        res.json(result)
        } catch (error) {
            res.json ({error: error})  
        }
    }
    
//update deliveryboy user
exports.updatedeluser = async(req, res, next) => {
    try {    
    const result = await prisma.user.update({
        where: {
            delivery_guy_detail_id: 2,
        },
    data: {
      deliveryboy: {
        update: {
          where: {
            id: 2,
          },
          data: {
            gender: 'male',
          },
        },
      },
    },
    include: {
      deliveryboy: true,
    },
  })  
  res.json(result)
} catch (error) {
    res.json ({error: error})  
}
}

//delete deliveryboy user
exports.deletedeluser = async(req, res, next) => {
    try {    
        const result = await prisma.user.update({
            where: {
              delivery_guy_detail_id: 3,
            },
            data: {
              deliveryboy: {
                deleteMany: 
                { }
              },
            },
            include: {
              deliveryboy: true,
            },
          })
  res.json(result)
} catch (error) {
    res.json ({error: error})  
}
}

// connect create
exports.connectdeluser = async(req, res, next) => {
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
    const result = await prisma.user.create({
      data: {
        name: name,
                email: email,
                password: password,
                remember_token: remember_token,
                auth_token: auth_token,
                phone: phone,
                default_address_id: default_address_id,
                delivery_pin: delivery_pin,
                avatar: avatar,
                is_active: is_active,
                tax_number: tax_number,
                user_ip: user_ip,
        deliveryboy: {
          connect: { 
            id: 6
           },
        },
      },
      include: {
        deliveryboy: true, // Include all posts in the returned object
      },
    })

    res.json(result)
  } catch (error) {
      res.json ({error: error}) 
      console.log(error) 
  }
  }

//user sign up

exports.signup = async (req, res, _next) => {
  try {
    const { name, 
      email,
      password,
      remember_token,
      phone,
      default_address_id,
      delivery_pin,
      delivery_guy_detail_id,
      avatar,
      is_active,
      tax_number,
      user_ip } = req.body;

    //check
    if (!name || !email || !password || !phone) {
      throw new Error("please provide all feilds");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        remember_token,
        phone,
        default_address_id,
        delivery_pin,
        avatar,
        is_active,
        tax_number,
        user_ip,
            
            deliveryboy: {
                create: 
                  { name: "shamil",
                  age: "19",
                  gender: "male",
                  photo: "thfrr",
                  description: "auth_tokenfgd",
                  vehicle_number: "6555",
                  commision_rate: 3.5,
                  is_notifiable: 6,
                  max_accept_delivery_limit: 6,
                  delivery_lat: "afnr",
                  delivery_long: "0",
                  heading: "95",
                  tip_commision_rate: 2.2,
                  status:0},
                
              },
              
    
    }
  });

    //send user
    const auth_token = cookieToken(user, res);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        auth_token,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
 
//user login
exports.login = async (req, _res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("please provide email and password");
    }

    //find a user based on email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    //when there is no user
    if (!user) {
      throw new Error("user not found");
    }

    //when password is not match
    if (user.password !== password) {
      throw new Error("Invalid password");
    }
    //user is there and validation
   const auth_token = cookieToken(user, _res);
    
    await prisma.user.update({
        where: { id: user.id },
        data: {
          auth_token,
        },
      });
  } catch (error) {
    throw new Error(error);
  }
};

//logout user
exports.logout = async (_req, res, _next) => {
  try {
    res.clearCookie("token");
    res.json({
      success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
