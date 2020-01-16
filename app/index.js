"use strict";

/**
 * Module dependencies.
 */

require("app-module-path").addPath(`${__dirname}/../`);

const api = require("app/app.js");
const config = require("config");

/**
 * Configuration.
 */

const { host, port } = config.server;

/**
 * Start server.
 */

api().listen(port, host);

// eslint-disable-next-line no-console
console.info(`Listening on ${host}:${port}`);
