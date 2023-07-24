const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Gabriel:testtest123@nodeexpressproject.mc8qao3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(() => console.log('CONNECTED TO THE DB')).catch((err) => console.log(err))