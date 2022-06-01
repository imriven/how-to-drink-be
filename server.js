const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
// const nameRouter = require("./name/router");
// const nameRouter = require("./name/router");
// const nameRouter = require("./name/router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// server.use("/api/name", nameRouter);
// server.use("/api/name", nameRouter);
// server.use("/api/name", nameRouter);

module.exports = server;

