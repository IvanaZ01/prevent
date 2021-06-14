const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();


//user actions
const getAllUsers = require('./routes/user/getAllUsers');
const createUser = require('./routes/user/createUser');

//article actions
const createArticle = require('./routes/article/createArticle')
const getAllArticles = require('./routes/article/getAllArticles');
const updateArticle = require('./routes/article/updateArticle');
const deleteArticle = require('./routes/article/deleteArticle')


app.use(express.json());
app.use(cors());

//user route requests
app.get('/user', (req, res) => getAllUsers(res));
app.post('/user', (req, res) => createUser(req.body, res));

//article route requests 
app.get('/article', (req, res)=>getAllArticles(res))
app.post('/article', (req,res)=>createArticle(req.body, res))
app.put('/article', (req, res)=>updateArticle(req.body, res))
app.delete('/article', (req,res)=>deleteArticle(req.body, res))

const server = http.createServer(app).listen(3000, () => {
	console.log(`Listening at http://localhost:3000`);
});

server.on('error', console.error);
