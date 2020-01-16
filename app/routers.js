"use strict";

/**
 * Module dependencies.
 */

const Router = require("koa-router");

// Routers.
const root = new Router();

// Controllers.
require("app/controllers/user-controller")(root);
require("app/controllers/wallet-controller")(root);

/**
 * Export `routers`.
 */

module.exports = { root };
