const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());
app.use("/", routes);


app.listen(8000, () => {
    console.log("running server");
});