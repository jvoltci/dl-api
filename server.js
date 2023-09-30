const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const sparkAPI = require('./routes/idx/sparkAPI')

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:5173', 'https://jvoltci.github.io/direct-lender/'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/idx/spark', sparkAPI)
app.get('/', (req, res) => res.send('Direct Lender is Up!'))

app.listen(PORT, () => console.log(`PORT is listening in ${PORT}`))