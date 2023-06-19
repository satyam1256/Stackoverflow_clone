const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5050;
const path = require('path');
const app = express();
const db = require('./db');
const router = require('./routers');


//  db connections 

db.connect();


// // middlewares
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); 

app.use(express.json());
// app.use(cors());

// headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
}
);


// //  api
app.use('/api', router)


// //  static-resources

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '/../frontend/build/index.html'));
    } catch(e){
        res.send('!Oops , error occured');
    }
});

// // cors

app.use(cors());

// // server

app.listen(PORT, () => {
    console.log(`Stackoverflow Clone is running on port ${PORT}`);
});



