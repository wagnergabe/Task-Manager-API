const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Task Manager App')
})

const port = 3000

app.listen(port, console.log('Server is listening on port: ' + port))
