"use strict";

/**
 * Module dependencies.
 */

const bodyparser = require("koa-bodyparser");
const Koa = require("koa");
const routers = require("app/routers");
const cors = require("@koa/cors");

/**
 * Export `application`.
 */

module.exports = () => {
    const app = new Koa();

    // Add body parser.
    app.use(cors());
    app.use(bodyparser());

    // Mounting.
    app.use(routers.root.routes());

    return app;
};
