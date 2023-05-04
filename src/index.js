const express = require('express');
const apiRoutes = require('./routes');

const {
    PORT
} = require('./config/index.js');

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});