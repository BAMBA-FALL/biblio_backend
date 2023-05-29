const express = require('express');  // Déclarer la bibliothèque express
const app = express(); // console.log(express);

const morgan = require('morgan'); // déclaration de dependencie morgan;
const cors = require('cors'); // déclaration de dependencie cors;

const router = require('./router'); // déclaration de la route;
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
app.use(express.json()); // Appeler la bibliothèque express
// console.log(process.env.MONGO_URI)
app.use(morgan('tiny')); // Appeler la bibliothèque morgan
app.use(cors()); // Appeler la bibliothèque cors
app.use(router); // Appeler la route

// Création du serveur MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to Mongodb')
    app.listen("3000");
})

