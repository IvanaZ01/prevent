const dotenvLoadingResult = require('dotenv').config();

if (dotenvLoadingResult.error) {
	throw dotenvLoadingResult.error;
}

console.log(dotenvLoadingResult.parsed);

const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

// middlewares
const {
	authenticateToken
} = require('./middlewares/auth.middleware');

// auth actions
const loginUser = require('./routes/auth/loginUser');
const resetPasswordRequest = require('./routes/auth/resetPasswordRequest');
const resetPassword = require('./routes/auth/resetPassword');

// user actions
const getAllUsers = require('./routes/user/getAllUsers');
const createUser = require('./routes/user/createUser');
const updateUser = require('./routes/user/updateUser');

// article actions
const createArticle = require('./routes/article/createArticle')
const getAllArticles = require('./routes/article/getAllArticles');
const updateArticle = require('./routes/article/updateArticle');
const deleteArticle = require('./routes/article/deleteArticle')
const viewArticle = require('./routes/article/viewArticle')

// category actions
const createCategory = require('./routes/category/createCategory')
const updateCategory = require('./routes/category/updateCategory')
const deleteCategory = require('./routes/category/deleteCategory');
const getAllCategories = require('./routes/category/getAllCategories');
const viewCategory = require('./routes/category/viewCategory');

app.use(express.json());
app.use(cors());

// auth routes
app.post('/auth/login', (req, res) => loginUser(req.body, res));
app.post('/auth/reset-password-request', (req, res) => resetPasswordRequest(req.body, res));
app.post('/auth/reset-password', (req, res) => resetPassword(req.body, res));

// user routes
app.get('/user', authenticateToken, (req, res) => getAllUsers(res));
app.post('/user', (req, res) => createUser(req.body, res));
app.put('/user/:id', authenticateToken, (req, res) => updateUser(req.params.id, req.body, res))

// article routes
app.get('/article', authenticateToken, (req, res) => getAllArticles(res))
app.get('/article/:id', authenticateToken, (req, res) => viewArticle(req.params.id, res))
app.post('/article', authenticateToken, (req, res) => {
	createArticle(req.body, res)
})
app.put('/article/:id', authenticateToken, (req, res) => updateArticle(req.params.id, req.body, res))
app.delete('/article/:id', authenticateToken, (req, res) => deleteArticle(req.params.id, res))

// category routes
app.get('/category', authenticateToken, (req, res) => getAllCategories(res))
app.get('/category/:id', authenticateToken, (req, res) => viewCategory(req.params.id, res))
app.post('/category', authenticateToken, (req, res) => createCategory(req.body, res))
app.put('/category/:id', authenticateToken, (req, res) => updateCategory(req.params.id, req.body, res))
app.delete('/category/:id', authenticateToken, (req, res) => deleteCategory(req.params.id, res))

const port = process.env.PORT;

const server = http.createServer(app).listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);