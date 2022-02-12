const express = require ('express')
const cors = require ('cors')


const app = express()

// middleware
app.use(express.json())

app.use(express.urlencoded({extended: true}))


// database
const db = require ('./models')
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to database')
}).catch(err => {
    console.log('Connection failed', err)
    process.exit()
})


// routes
const customerRoute = require('./routes/customerRoute')
const queueRoute = require('./routes/queueRoute')
const adminRoute = require('./routes/adminRoute')
app.use('/api/customers', customerRoute)
app.use('/api/queue', queueRoute)
app.use('/admin', adminRoute)

//testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

// port
const PORT = process.env.PORT || 8000

// server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})