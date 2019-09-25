const express = require('express');

const app = express();

app.use(express.json());

app.post('/sign-in', (req, res) => res.json(req.body));
app.post('/sign-up', (req, res) => res.json(req.body));

app.listen(4000);
