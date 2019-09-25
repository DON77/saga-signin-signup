const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-in', (req, res) => res.json(req.body));
app.post('/sign-up', (req, res) => res.json(req.body));

app.listen(4000);
