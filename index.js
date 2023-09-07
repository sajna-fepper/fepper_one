const express = require('express')
const app = express()

require('dotenv').config()

//middlrware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/crudroutes')
const deliveryguydetailRouter = require('./routes/deliveryguyroutes')

app.use('/api', userRouter)
app.use('/api',deliveryguydetailRouter)


app.get('/', (req, res) => {
    res.send('sajnaa')

})

app.listen(5000, () => {
    console.log('server running on port 5000')

})