// importare express
const express = require('express');

// funzione express.Router 
const router = express.Router();

// importare posts-food 
const postsFood = require('../data/posts-food.js');

// Creare rotte per operazioni CRUD

// index
router.get('/', function (req,res) {
    res.json(postsFood);
})

// show 
router.get('/:id', function (req,res) {

    const {id} = req.params;
    const currentPost = postsFood.find(post => post.slug === id);
    res.json(currentPost);
})

// store
router.post('/', function (req,res) { 
    res.send('Creazione di un nuovo post');
})

// update 
router.put('/:id', function (req,res) { 
    const {id} = req.params;
    res.send(`Modifica integrale del post ${id}`);
})

// modify 
router.patch('/:id', function (req,res) {
    const {id} = req.params;
    res.send(`Modifica parziale del post ${id}`);
})

// destroy 
router.delete('/:id', function(req,res) {
    const {id} = req.params;
    res.send(`Eliminazione del post ${id}`);
})

// esportare router
module.exports = router;