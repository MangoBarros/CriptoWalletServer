"use strict";

/**
 * Module dependencies.
 */

const knex = require("src/clients/knex");

/**
 * `UserManager`.
 */

class WalletManager {
    /**
     * Find all.
     */

    async findAll() {
        const wallet = await knex("wallets").select("*");

        return wallet;
    }

    /**
     * Find by id.
     */

    async findById(id) {
        const wallet = await knex("wallets")
            .select("*")
            .where({ id });

        return wallet;
    }

    /**
     * Create user.
     */

    async createWallet(data) {
        const wallet = await knex("wallets")
            .insert({
                user_id: data.user_id,
                eur: data.eur,
                btc: data.btc,
                eth: data.eth
            })
            .returning("*");

        return wallet;
    }

    /**
     * Update user.
     */

    async updateWallet(id, data) {
        const Wallet = await knex("wallet")
            .update(data)
            .where({ id })
            .returning("*");

        return user;
    }

    /**
     * Delete user.
     */

    async deleteWallet(id) {
        await knex("wallets")
            .delete()
            .where({ id });
    }
}

/**
 * Export `UserManager`.
 */

module.exports = new WalletManager();