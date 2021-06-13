const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

const getAllUsers = require('./routes/user/getAllUsers');
const createUser = require('./routes/user/createUser');

app.use(express.json());
app.use(cors());

app.get('/user', (req, res) => getAllUsers(res));
app.post('/user', (req, res) => createUser(req.body, res));

const server = http.createServer(app).listen(3000, () => {
	console.log(`Listening at http://localhost:3000`);
});

server.on('error', console.error);
