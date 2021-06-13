const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', (req, res) => {
	res.send({
		test: 'test',
	});
});

const server = http.createServer(app).listen(3000, () => {
	console.log(`Listening at http://localhost:3000`);
});

server.on('error', console.error);
