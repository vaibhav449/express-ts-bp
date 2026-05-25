// index.js
import express from "express";
import { type Express } from "express";
import { serverConfig } from "./config/index.js";
import pingRouter from "./router/ping.route.js";
import { genericErrorHandler } from "./middleware/error.middleware.js";
import logger from "./config/logger.config.js";
import { handleLogging } from "./middleware/logger.middleware.js";
const app:Express = express();
const port = serverConfig.port;

app.use(express.json());
app.use(handleLogging);
app.use('/ping', pingRouter);

app.use(genericErrorHandler);

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  logger.info(`Server is running on port ${port}`,{data:"ofjsdifjidos"});
});