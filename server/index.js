const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 7999;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));