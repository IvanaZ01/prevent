const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();


//user actions
const getAllUsers = require('./routes/user/getAllUsers');
const createUser = require('./routes/user/createUser');
const updateUser = require('./routes/user/updateUser');

//article actions
const createArticle = require('./routes/article/createArticle')
const getAllArticles = require('./routes/article/getAllArticles');
const updateArticle = require('./routes/article/updateArticle');
const deleteArticle = require('./routes/article/deleteArticle')
const viewArticle = require('./routes/article/viewArticle')

//category actions
const createCategory = require('./routes/category/createCategory')
const updateCategory = require('./routes/category/updateCategory')
const deleteCategory = require('./routes/category/deleteCategory');
const getAllCategories = require('./routes/category/getAllCategories');
const viewCategory = require('./routes/category/viewCategory');

app.use(express.json());
app.use(cors());

//user route requests
app.get('/user', (req, res) => getAllUsers(res));
app.post('/user', (req, res) => createUser(req.body, res));
app.put('/user/:id', (req,res)=>updateUser(req.params.id, req.body, res))

//article route requests 
app.get('/article', (req, res)=>getAllArticles(res))
app.get('/article/:id', (req,res)=>viewArticle(req.params.id, res))
app.post('/article', (req,res)=>{
	createArticle(req.body, res)
})
app.put('/article/:id', (req, res)=>updateArticle(req.params.id, req.body, res))
app.delete('/article/:id', (req,res)=>deleteArticle(req.params.id, res))

// category route requests
app.get('/category', (req,res)=>getAllCategories(res))
app.get('/category/:id', (req,res)=>viewCategory(req.params.id, res))
app.post('/category', (req,res)=>createCategory(req.body, res))
app.put('/category/:id', (req,res)=>updateCategory(req.params.id, req.body, res))
app.delete('/category/:id', (req,res)=>deleteCategory(req.params.id, res))

const server = http.createServer(app).listen(3000, () => {
	console.log(`Listening at http://localhost:3000`);
});

server.on('error', console.error);
