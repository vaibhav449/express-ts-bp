// index.js
import express from "express";
import { type Express } from "express";
import { serverConfig } from "./config/index.js";
import pingRouter from "./router/ping.route.js";
const app:Express = express();
const port = serverConfig.port;

app.use('/ping', pingRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});