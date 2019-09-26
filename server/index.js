const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-in', (req, res) => setTimeout(() => res.json(req.body), 3000));
app.post('/sign-up', (req, res) => setTimeout(() => res.json(req.body), 3000));

app.listen(4000);
