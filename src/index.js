const express = require('express');
const apiRoutes = require('./routes');

const {
    ServerConfig,
    Logger
} = require('./config/index.js');
const logger = require('./config/logger-config');


const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`listening on port ${ServerConfig.PORT}`);
    logger.info("Successfully started server", {});
});