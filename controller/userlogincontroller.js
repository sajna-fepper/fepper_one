// Bring prisma and cookie

const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

//user sign up

exports.signup = async (req, res, _next) => {
  try {
    const { name, email, password } = req.body;

    //check
    if (!name || !email || !password) {
      throw new Error("please provide all feilds");
    }

    const userlogin = await prisma.userlogin.create({
      data: {
        name,
        email,
        password,
      },
    });

    //send user
    const auth_token = cookieToken(userlogin, res);

    await prisma.userlogin.update({
      where: { id: userlogin.id },
      data: {
        auth_token,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

//login user

exports.login = async (req, _res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("please provide email and password");
    }

    //find a user based on email
    const userlogin = await prisma.userlogin.findUnique({
      where: {
        email,
      },
    });

    //when there is no user
    if (!userlogin) {
      throw new Error("user not found");
    }

    //when password is not match
    if (userlogin.password !== password) {
      throw new Error("Invalid password");
    }
    //user is there and validation
   const auth_token = cookieToken(userlogin, _res);
    
    await prisma.userlogin.update({
        where: { id: userlogin.id },
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
