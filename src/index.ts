import express from 'express'

const app = express();

const PORT = 4000;

app.get('/', (req, res) =>{
    console.log('someone is pinging')
    res.send('hey')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})