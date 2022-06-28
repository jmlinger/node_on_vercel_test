require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Running on port ${PORT}.`));
