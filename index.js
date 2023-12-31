const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

require("dotenv").config();

//middlrware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie middleware
app.use(cookieParser());

const userRouter = require("./routes/userroutes");
const deliveryguydetailRouter = require("./routes/deliveryguyroutes");
const restaurantRouter = require("./routes/restaurantroutes");
const orderRouter = require("./routes/orderroutes");
const userloginRouter = require("./routes/userloginroutes");

app.use("/api", userRouter);
app.use("/api", deliveryguydetailRouter);
app.use("/api", restaurantRouter);
app.use("/api", orderRouter);
app.use("/api", userloginRouter);

app.get("/", (req, res) => {
  res.send("sajnaa");
});

app.listen(6000, () => {
  console.log("server running on port 6000");
});
