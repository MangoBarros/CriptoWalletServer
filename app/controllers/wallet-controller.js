"use strict";

/**
 * Module dependencies.
 */

const walletManager = require("src/wallets/wallet-manager");

/**
 * Export `UsersController`.
 */

module.exports = app => {
    // Get Wallets.
    app.get("/wallet", async context => {
        const wallet = await walletManager.findAll();

        context.body = wallet;
    });

    // Get Wallet by id.
    app.get("/wallet/:id", async context => {
        const [wallet] = await walletManager.findById(context.params.id);

        context.body = wallet;
    });

    // Create Wallet.
    app.post("/wallet", async context => {
        const [wallet] = await walletManager.createWallet(context.request.body);

        context.body = wallet;
    });

    // Update Wallet.
    app.patch("/wallet/:id", async context => {
        const [wallet] = await walletManager.updateWallet(context.params.id, context.request.body);

        context.body = wallet;
    });

    // Delete Wallet.
    app.delete("/wallet/:id", async context => {
        await walletManager.deleteWallet(context.params.id);

        context.status = 204;
    });
};
