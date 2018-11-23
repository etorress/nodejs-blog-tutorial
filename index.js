const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');

const app = new express();

app.use(express.static('public'));
app.use(expressEdge);

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'/public/about.html'));
});

app.get('/contact', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'/public/contact.html'));
});

app.get('/post',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'/public/post.html'));
});

app.listen(4000, () => {
   console.log('App listening on port 4000'); 
});