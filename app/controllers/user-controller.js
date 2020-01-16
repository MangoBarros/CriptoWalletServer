"use strict";

/**
 * Module dependencies.
 */

const userManager = require("src/users/user-manager");

/**
 * Export `UsersController`.
 */

module.exports = app => {
    // Get users.
    app.get("/users", async context => {
        const users = await userManager.findAll();

        context.body = users;
    });

    // Get user by id.
    app.get("/users/:id", async context => {
        const [user] = await userManager.findById(context.params.id);

        context.body = user;
    });

    // Create user.
    app.post("/users", async context => {
        console.log("context.request.body =>", context.request.body);
        const [user] = await userManager.createUser(context.request.body);

        context.body = user;
    });

    // Update user.
    app.patch("/users/:id", async context => {
        const [user] = await userManager.updateUser(context.params.id, context.request.body);

        context.body = user;
    });

    // Delete user.
    app.delete("/users/:id", async context => {
        await userManager.deleteUser(context.params.id);

        context.status = 204;
    });
};
