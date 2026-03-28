const express = require('express');

const app = express()
// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Servidor funcionando!'
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})