// importare express
const express = require('express');

// funzione express
const app = express();

// porta
const port = 3000;

app. listen (port, () => {
    console.log(`Sono un server attivo sulla porta ${port}`);
})

// public assests
app.use(express.static('public'));

// homepage
app.get('/', (req,res) => {
    res.send('Sono nella homepage');
})

// importare router
const postsRouter = require('./routers/posts.js');

// indicare ad express le nuove rotte 
app.use('/posts', postsRouter);
