const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");

const createPostController = require('./controllers/createPost');
const homePageController = require('./controllers/homePage');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const createUserController = require("./controllers/createUser");
const storeUserController = require('./controllers/storeUser');
const loginController = require ("./controllers/login");
const loginUserController = require ("./controllers/loginUser");

const app = new express();

mongoose.connect('mongodb://localhost:27017/node-blog', {useNewUrlParser: true})
    .then(()=> 'You are now connected to Mongo!')
    .catch(err=> console.error('Something went wrong', err))

app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge);
app.set('views', __dirname + '/views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

const storePost = require('./middleware/storePost')
 
app.use('/posts/store', storePost)
 
app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/posts/new", createPostController);
app.post("/posts/store", storePostController);
app.get('/auth/login', loginController);
app.post('/users/login', loginUserController);
app.get("/auth/register", createUserController);
app.post("/users/register", storeUserController);


app.listen(4000, () => {
   console.log('App listening on port 4000'); 
});