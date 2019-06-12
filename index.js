const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-alyxf.mongodb.net/test?retryWrites=true&w=majority'{
    useNewUrlParser: true,
});

app.get('/',(req, rest)=>{
    return rest.send('ola ${req.query.name}');
});

app.listen(3333);
